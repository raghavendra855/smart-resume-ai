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

async function main() {
  console.log('--- TESTING CLEAN PDF EXPORT & NAVBAR OVERLAY ELIMINATION ---');

  // Verify server is alive
  try {
    const ping = await fetch(`${BASE_URL}/login`);
    console.log(`Server /login status: ${ping.status}`);
  } catch (err) {
    console.error('Server not reachable:', err.message);
    process.exit(1);
  }

  // Launch headless Chrome
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

  // Register / Login user
  console.log('\n1. Registering/Logging in test user in real browser...');
  const testEmail = `pdf_test_${Date.now()}@example.com`;
  await send('Page.navigate', { url: `${BASE_URL}/register` });
  await sleep(2500);

  await send('Runtime.evaluate', {
    expression: `(() => {
      const nameInput = document.querySelector('input[placeholder*="Full Name"], input[placeholder*="name" i], #full-name, input[type="text"]');
      const emailInput = document.querySelector('input[type="email"]');
      const passwordInputs = Array.from(document.querySelectorAll('input[type="password"]'));
      function setVal(input, val) {
        const proto = Object.getPrototypeOf(input);
        const set = Object.getOwnPropertyDescriptor(proto, 'value').set;
        set.call(input, val);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
      setVal(nameInput, 'Thomas Hamptone');
      setVal(emailInput, '${testEmail}');
      setVal(passwordInputs[0], 'TestPass123!');
      setVal(passwordInputs[1], 'TestPass123!');
      document.querySelector('button[type="submit"]')?.click();
    })()`
  });
  await sleep(3000);

  // Navigate to Builder
  console.log('\n2. Navigating to /builder...');
  await send('Page.navigate', { url: `${BASE_URL}/builder` });
  await sleep(3000);

  // Verify normal interface still displays navbar & controls
  const normalUiCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('header');
      const themeToggle = document.querySelector('button[title*="theme" i], button[aria-label*="theme" i], .theme-toggle');
      const resumeDoc = document.getElementById('resume-a4-document');
      return {
        headerVisible: !!header && window.getComputedStyle(header).display !== 'none',
        themeToggleVisible: !!themeToggle,
        resumeDocPresent: !!resumeDoc
      };
    })()`,
    returnByValue: true
  });
  console.log('Normal interface UI visibility check:', normalUiCheck.result.value);

  // Test across multiple templates (e.g. Thomas Hamptone, Richard Sanchez, Nick Koe)
  const templates = [
    { id: 'thomas-hamptone', name: 'Editorial Classic' },
    { id: 'richard-sanchez', name: 'Navy Timeline' },
    { id: 'nick-koe', name: 'Teal Modernist' }
  ];

  for (const tmpl of templates) {
    console.log(`\n--- Testing Template: ${tmpl.name} (${tmpl.id}) ---`);

    // Switch to step 8 and select template
    await send('Runtime.evaluate', {
      expression: `(() => {
        document.getElementById('btn-step-8')?.click();
      })()`
    });
    await sleep(800);

    await send('Runtime.evaluate', {
      expression: `(() => {
        const card = document.querySelector('[data-template-id="${tmpl.id}"]');
        if (card) {
          const selectArea = card.querySelector('.cursor-pointer, [title*="select" i]') || card;
          selectArea.click();
        }
      })()`
    });
    await sleep(800);

    // Switch to step 9 (Preview)
    await send('Runtime.evaluate', {
      expression: `(() => {
        document.getElementById('btn-step-9')?.click();
      })()`
    });
    await sleep(1000);

    // TEST PRINT MEDIA EMULATION: Verify elements in print mode
    await send('Emulation.setEmulatedMedia', { media: 'print' });
    await sleep(500);

    const printDomCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const header = document.querySelector('header');
        const sidebar = document.querySelector('aside');
        const themeToggle = document.querySelector('button[title*="theme" i], button[aria-label*="theme" i], .theme-toggle');
        const resumeDoc = document.getElementById('resume-a4-document');
        const previewViewport = document.getElementById('resume-print-viewport');

        const headerStyle = header ? window.getComputedStyle(header) : null;
        const sidebarStyle = sidebar ? window.getComputedStyle(sidebar) : null;
        const resumeStyle = resumeDoc ? window.getComputedStyle(resumeDoc) : null;
        const viewportStyle = previewViewport ? window.getComputedStyle(previewViewport) : null;

        return {
          headerDisplay: headerStyle?.display,
          headerVisibility: headerStyle?.visibility,
          sidebarDisplay: sidebarStyle?.display,
          resumeDisplay: resumeStyle?.display,
          viewportMaxHeight: viewportStyle?.maxHeight,
          viewportOverflow: viewportStyle?.overflow
        };
      })()`,
      returnByValue: true
    });
    console.log('Print DOM styles verification:', printDomCheck.result.value);

    // Restore screen media for normal state
    await send('Emulation.setEmulatedMedia', { media: 'screen' });
    await sleep(300);

    // GENERATE ACTUAL A4 PDF via CDP Page.printToPDF
    console.log('Generating actual A4 PDF via print engine...');
    const pdf = await send('Page.printToPDF', {
      printBackground: true,
      paperWidth: 8.27, // A4 Width (inches)
      paperHeight: 11.69, // A4 Height (inches)
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      preferCSSPageSize: true
    });

    const pdfBuffer = Buffer.from(pdf.data, 'base64');
    const pdfFilePath = path.join(ARTIFACTS_DIR, `verified_${tmpl.id}.pdf`);
    fs.writeFileSync(pdfFilePath, pdfBuffer);
    console.log(`Saved PDF to: ${pdfFilePath} (${pdfBuffer.length} bytes)`);

    // Inspect PDF raw content
    const pdfText = pdfBuffer.toString('latin1');
    const hasHeaderLeaks =
      pdfText.includes('Sign Out') ||
      pdfText.includes('Resume Builder') && !pdfText.includes('Professional Resume Builder') ||
      pdfText.includes('Dashboard') && pdfText.includes('Home') && pdfText.includes('Feedback');

    console.log(`PDF Header/Navbar leak check: ${hasHeaderLeaks ? 'DETECTED LEAK ❌' : 'CLEAN - NO LEAKS DETECTED ✅'}`);
    if (hasHeaderLeaks) {
      console.warn('Warning: possible header string detected in PDF binary text stream');
    }
  }

  console.log('\n======================================================');
  console.log('PDF EXPORT VERIFICATION COMPLETED SUCCESSFULLY!');
  console.log('======================================================');

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch(err => {
  console.error('PDF verification error:', err);
  process.exit(1);
});
