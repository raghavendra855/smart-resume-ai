import { spawn } from 'child_process';
import http from 'http';
import WebSocket from 'ws';

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
function getJson(url) {
  return new Promise((r, j) => http.get(url, res => {
    let d = ''; res.on('data', c => d += c); res.on('end', () => r(JSON.parse(d)));
  }).on('error', j));
}

async function waitMainApp() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--user-data-dir=d:\\projects\\builder\\scripts\\.edge_wait_' + Date.now(),
    'about:blank'
  ], { stdio: 'ignore' });

  await wait(1000);
  try {
    const raw = await getJson('http://localhost:9222/json');
    const target = raw.find(t => t.type === 'page');
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise(r => ws.on('open', r));

    let id = 1;
    const send = (m, p) => new Promise(r => {
      const i = id++;
      const h = d => { const j = JSON.parse(d); if (j.id === i) { ws.off('message', h); r(j.result); } };
      ws.on('message', h);
      ws.send(JSON.stringify({ id: i, method: m, params: p }));
    });

    let mainAppFinished = false;
    ws.on('message', d => {
      const m = JSON.parse(d.toString());
      if (m.method === 'Network.responseReceived' && m.params.response.url.includes('main-app.js')) {
        console.log('[MAIN-APP RESPONSE RECEIVED]', m.params.response.status, m.params.response.headers);
      }
      if (m.method === 'Network.loadingFinished') {
        if (m.params.requestId?.includes('4') || m.params.encodedDataLength > 100000) {
          console.log('[LARGE RESOURCE FINISHED]', m.params.requestId, m.params.encodedDataLength);
        }
      }
      if (m.method === 'Network.loadingFailed') {
        console.log('[LOADING FAILED]', m.params.requestId, m.params.errorText);
      }
      if (m.method === 'Runtime.consoleAPICalled') {
        console.log('[CONSOLE]', m.params.type, m.params.args.map(a => a.value || a.description));
      }
    });

    await send('Page.enable');
    await send('Network.enable');
    await send('Runtime.enable');

    console.log('Navigating to http://localhost:3000/register...');
    await send('Page.navigate', { url: 'http://localhost:3000/register' });

    for (let i = 0; i < 40; i++) {
      await wait(500);
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const form = document.querySelector('form');
          const keys = form ? Object.getOwnPropertyNames(form).filter(k => k.startsWith('__react')) : [];
          return {
            hasWebpack: Boolean(window.webpackChunk_N_E),
            chunkCount: window.webpackChunk_N_E?.length,
            reactKeys: keys.length,
            ready: document.readyState
          };
        })()`,
        returnByValue: true
      });
      if (res?.result?.value?.reactKeys > 0) {
        console.log(`[HYDRATED at ${i * 500}ms!]`, res.result.value);
        break;
      }
      if (i % 6 === 0) {
        console.log(`[WAITING ${i * 500}ms]`, res?.result?.value);
      }
    }

    ws.close();
  } finally {
    proc.kill();
  }
}

waitMainApp().catch(console.error);
