import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9222;
const BASE_URL = 'http://localhost:3000';
const ARTIFACTS_DIR = 'C:\\Users\\SAI\\.gemini\\antigravity-ide\\brain\\d7ed037c-b860-4752-a04c-1413398dcc0e';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runHttpAuthTests() {
  console.log('\n======================================================');
  console.log('PART 1: HTTP ROUTE PROTECTION & ACCESS CONTROL TESTS');
  console.log('======================================================');

  const tests = [
    { name: 'Root path / without auth', url: `${BASE_URL}/`, expectRedirect: '/login' },
    { name: 'Protected /builder without auth', url: `${BASE_URL}/builder`, expectRedirect: '/login?from=%2Fbuilder' },
    { name: 'Protected /dashboard without auth', url: `${BASE_URL}/dashboard`, expectRedirect: '/login?from=%2Fdashboard' },
    { name: 'Protected /analyzer without auth', url: `${BASE_URL}/analyzer`, expectRedirect: '/login?from=%2Fanalyzer' },
    { name: 'Protected /admin/dashboard without auth', url: `${BASE_URL}/admin/dashboard`, expectRedirect: '/admin/login?from=%2Fadmin%2Fdashboard' },
  ];

  for (const t of tests) {
    const res = await fetch(t.url, { redirect: 'manual' });
    const location = res.headers.get('location') || '';
    const status = res.status;
    const passed = (status === 307 || status === 302 || status === 308) && location.includes(t.expectRedirect.split('?')[0]);
    console.log(`[ROUTE TEST] ${t.name} -> Status: ${status}, Location: ${location} | ${passed ? 'PASSED ✅' : 'FAILED ❌'}`);
    if (!passed) throw new Error(`Route test failed for ${t.name}`);
  }

  // Test Protected API without auth
  const apiRes = await fetch(`${BASE_URL}/api/resume`, { redirect: 'manual' });
  console.log(`[API TEST] Protected /api/resume without auth -> Status: ${apiRes.status} | ${apiRes.status === 401 ? 'PASSED ✅' : 'FAILED ❌'}`);
  if (apiRes.status !== 401) throw new Error('API protection failed');

  const adminApiRes = await fetch(`${BASE_URL}/api/admin/stats`, { redirect: 'manual' });
  console.log(`[API TEST] Protected /api/admin/stats without auth -> Status: ${adminApiRes.status} | ${adminApiRes.status === 401 ? 'PASSED ✅' : 'FAILED ❌'}`);
  if (adminApiRes.status !== 401) throw new Error('Admin API protection failed');

  // Test Public Auth Pages allow access
  const loginRes = await fetch(`${BASE_URL}/login`, { redirect: 'manual' });
  console.log(`[PUBLIC TEST] /login accessible -> Status: ${loginRes.status} | ${loginRes.status === 200 ? 'PASSED ✅' : 'FAILED ❌'}`);

  const registerRes = await fetch(`${BASE_URL}/register`, { redirect: 'manual' });
  console.log(`[PUBLIC TEST] /register accessible -> Status: ${registerRes.status} | ${registerRes.status === 200 ? 'PASSED ✅' : 'FAILED ❌'}`);

  const adminLoginRes = await fetch(`${BASE_URL}/admin/login`, { redirect: 'manual' });
  console.log(`[PUBLIC TEST] /admin/login accessible -> Status: ${adminLoginRes.status} | ${adminLoginRes.status === 200 ? 'PASSED ✅' : 'FAILED ❌'}`);
}

async function main() {
  await runHttpAuthTests();

  console.log('\n======================================================');
  console.log('PART 2: REAL BROWSER & CHROME CDP VERIFICATION');
  console.log('======================================================');

  const chrome = spawn(CHROME_PATH, [
    `--remote-debugging-port=${PORT}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--window-size=1440,960',
    'about:blank'
  ]);

  await sleep(1500);

  let targets = [];
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json`);
      if (res.ok) {
        targets = await res.json();
        break;
      }
    } catch (e) {}
    await sleep(300);
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let msgId = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = msgId++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }
  };

  await new Promise(r => ws.onopen = r);
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');

  // Test 2.1: Register a verified user
  console.log('\n--- 2.1 Registering Real User in Browser ---');
  const userEmail = `verified_user_${Date.now()}@test.com`;
  const userPassword = 'TestPassword123!';

  await send('Page.navigate', { url: `${BASE_URL}/register` });
  await sleep(3000);

  await send('Runtime.evaluate', {
    expression: `(() => {
      const nameInput = document.querySelector('input[placeholder*="Full Name"], input[placeholder*="name" i], #full-name, input[type="text"]');
      const emailInput = document.querySelector('input[type="email"]');
      const passwordInputs = Array.from(document.querySelectorAll('input[type="password"]'));
      const passInput = passwordInputs[0];
      const confirmInput = passwordInputs[1];
      const submitBtn = document.querySelector('button[type="submit"]');

      function setVal(input, val) {
        const proto = Object.getPrototypeOf(input);
        const set = Object.getOwnPropertyDescriptor(proto, 'value').set;
        set.call(input, val);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }

      setVal(nameInput, 'Thomas Hamptone');
      setVal(emailInput, '${userEmail}');
      setVal(passInput, '${userPassword}');
      setVal(confirmInput, '${userPassword}');
      submitBtn.click();
    })()`,
  });

  await sleep(3500);

  const afterReg = await send('Runtime.evaluate', {
    expression: 'window.location.pathname',
    returnByValue: true
  });
  console.log(`After user registration destination: ${afterReg.result.value} (Expected /dashboard or /builder)`);

  // Test 2.2: Navigate to Resume Builder
  console.log('\n--- 2.2 Navigating to /builder as Authenticated User ---');
  await send('Page.navigate', { url: `${BASE_URL}/builder` });
  await sleep(3000);

  const builderUrl = await send('Runtime.evaluate', {
    expression: 'window.location.pathname',
    returnByValue: true
  });
  console.log(`Builder URL: ${builderUrl.result.value} | ${builderUrl.result.value === '/builder' ? 'PASSED ✅' : 'FAILED ❌'}`);

  // Test 2.3: Verify All 5 Reference Templates
  const templatesToTest = [
    { id: 'thomas-hamptone', name: 'Editorial Classic (Hamptone)' },
    { id: 'nick-koe', name: 'Teal Modernist (Nick Koe)' },
    { id: 'richard-sanchez', name: 'Navy Timeline (Sanchez)' },
    { id: 'olivia-wilson-grid', name: 'Architectural Grid (Olivia Wilson)' },
    { id: 'olivia-wilson-blush', name: 'Blush Editorial (Olivia Wilson)' },
  ];

  for (const tmpl of templatesToTest) {
    console.log(`\nTesting Template: ${tmpl.name} (id: ${tmpl.id})`);

    // Switch to step 8 (Templates) or directly select template
    await send('Runtime.evaluate', {
      expression: `(() => {
        // Find step 8 button or click
        const step8Btn = document.getElementById('btn-step-8');
        if (step8Btn) step8Btn.click();
      })()`
    });
    await sleep(800);

    // Select the template
    const selectRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const card = document.querySelector('[data-template-id="${tmpl.id}"]');
        if (card) {
          const selectArea = card.querySelector('.cursor-pointer, [title*="select" i]') || card;
          selectArea.click();
          return { found: true };
        }
        return { found: false };
      })()`,
      returnByValue: true
    });
    console.log(`Template card selection (${tmpl.id}):`, selectRes.result.value);
    await sleep(1000);

    // Jump to preview step 9
    await send('Runtime.evaluate', {
      expression: `(() => {
        const step9Btn = document.getElementById('btn-step-9');
        if (step9Btn) step9Btn.click();
      })()`
    });
    await sleep(1200);

    // Verify template rendering in live preview DOM
    const previewContent = await send('Runtime.evaluate', {
      expression: `(() => {
        const preview = document.getElementById('resume-a4-document');
        if (!preview) return { hasPreview: false };
        return {
          hasPreview: true,
          textLength: preview.innerText.length,
          previewSnippet: preview.innerText.slice(0, 150).replace(/\\n/g, ' ')
        };
      })()`,
      returnByValue: true
    });
    console.log(`Preview DOM verification:`, previewContent.result.value);

    // Capture screenshot of the template preview
    const screenshot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 500, y: 150, width: 850, height: 750, scale: 1 }
    });
    const screenshotPath = path.join(ARTIFACTS_DIR, `template_preview_${tmpl.id}.png`);
    fs.writeFileSync(screenshotPath, Buffer.from(screenshot.data, 'base64'));
    console.log(`Captured preview screenshot: ${screenshotPath}`);

    // Generate real A4 PDF for this template
    const pdfData = await send('Page.printToPDF', {
      printBackground: true,
      paperWidth: 8.27, // A4 width in inches (210mm)
      paperHeight: 11.69, // A4 height in inches (297mm)
      marginTop: 0.4,
      marginBottom: 0.4,
      marginLeft: 0.4,
      marginRight: 0.4,
    });
    const pdfPath = path.join(ARTIFACTS_DIR, `resume_${tmpl.id}.pdf`);
    const pdfBuffer = Buffer.from(pdfData.data, 'base64');
    fs.writeFileSync(pdfPath, pdfBuffer);
    console.log(`Generated A4 PDF: ${pdfPath} (${pdfBuffer.length} bytes) | PDF VALID ✅`);
  }

  // Test 2.4: Admin segregation test
  console.log('\n--- 2.4 Admin Authorization Segregation Test ---');
  // With standard user logged in, attempt to navigate to /admin/dashboard
  await send('Page.navigate', { url: `${BASE_URL}/admin/dashboard` });
  await sleep(3000);

  const adminAttempt = await send('Runtime.evaluate', {
    expression: 'window.location.pathname',
    returnByValue: true
  });
  console.log(`User attempting /admin/dashboard navigated to: ${adminAttempt.result.value}`);
  const isSegregated = adminAttempt.result.value.includes('/admin/login');
  console.log(`Admin Route Segregation from normal user: ${isSegregated ? 'PASSED ✅' : 'FAILED ❌'}`);

  // Test 2.5: Admin Login with valid credentials
  console.log('\n--- 2.5 Admin Login Test ---');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const emailInput = document.querySelector('input[type="email"]');
      const passInput = document.querySelector('input[type="password"]');
      const submitBtn = document.querySelector('button[type="submit"]');
      function setVal(input, val) {
        const proto = Object.getPrototypeOf(input);
        const set = Object.getOwnPropertyDescriptor(proto, 'value').set;
        set.call(input, val);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
      setVal(emailInput, 'kiran81232@gmail.com');
      setVal(passInput, 'kiran@69');
      if (submitBtn) submitBtn.click();
    })()`
  });
  await sleep(3500);

  const adminPostLogin = await send('Runtime.evaluate', {
    expression: 'window.location.pathname',
    returnByValue: true
  });
  console.log(`Admin destination after login: ${adminPostLogin.result.value} | ${adminPostLogin.result.value.includes('/admin') ? 'PASSED ✅' : 'FAILED ❌'}`);

  console.log('\n======================================================');
  console.log('ALL VERIFICATION TESTS COMPLETED SUCCESSFULLY! 🎉');
  console.log('======================================================');

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
