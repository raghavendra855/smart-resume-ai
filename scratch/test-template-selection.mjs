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

  const testEmail = `template_test_${Date.now()}@example.com`;
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

  await send('Page.navigate', { url: `${BASE_URL}/builder` });
  await sleep(3000);

  const templatesToTest = [
    'thomas-hamptone',
    'nick-koe',
    'richard-sanchez',
    'olivia-wilson-grid',
    'olivia-wilson-blush'
  ];

  for (const tid of templatesToTest) {
    // Go to step 8
    await send('Runtime.evaluate', {
      expression: `document.getElementById('btn-step-8')?.click()`
    });
    await sleep(600);

    // Click "Use Template" button or card
    const clickResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const card = document.querySelector('[data-template-id="${tid}"]');
        if (!card) return { found: false };
        // Click Use Template button on card
        const useBtn = card.querySelector('button:last-child');
        if (useBtn) {
          useBtn.click();
          return { found: true, clicked: 'button' };
        }
        card.click();
        return { found: true, clicked: 'card' };
      })()`,
      returnByValue: true
    });
    console.log(`Selecting template ${tid}:`, clickResult.result.value);
    await sleep(800);

    // Go to step 9 (Preview)
    await send('Runtime.evaluate', {
      expression: `document.getElementById('btn-step-9')?.click()`
    });
    await sleep(800);

    // Check preview content
    const docInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.getElementById('resume-a4-document');
        return {
          textSample: el ? el.innerText.slice(0, 100).replace(/\\n/g, ' ') : 'NOT_FOUND',
          childClasses: el ? Array.from(el.children).map(c => c.className).join(' | ').slice(0, 80) : ''
        };
      })()`,
      returnByValue: true
    });
    console.log(`Template ${tid} preview rendered:`, docInfo.result.value);

    // Generate PDF
    const pdf = await send('Page.printToPDF', {
      printBackground: true,
      paperWidth: 8.27,
      paperHeight: 11.69,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      preferCSSPageSize: true
    });

    const pdfBuffer = Buffer.from(pdf.data, 'base64');
    const pdfFilePath = path.join(ARTIFACTS_DIR, `isolated_${tid}.pdf`);
    fs.writeFileSync(pdfFilePath, pdfBuffer);
    console.log(`Saved isolated PDF: ${pdfFilePath} (${pdfBuffer.length} bytes)`);

    // Verify PDF does NOT contain Header / Navbar / Sign out text
    const pdfText = pdfBuffer.toString('latin1');
    const hasNavbar = pdfText.includes('Sign Out') || (pdfText.includes('Resume Builder') && !pdfText.includes('Professional Resume Builder'));
    console.log(`Navbar check for ${tid}: ${hasNavbar ? 'LEAK ❌' : 'NO NAVBAR (CLEAN) ✅'}`);
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch(console.error);
