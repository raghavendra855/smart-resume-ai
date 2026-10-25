async function run() {
  const res = await fetch('http://localhost:3000/_next/static/chunks/app/layout.js');
  const t = await res.text();
  const lines = t.split('\n');
  for (const l of lines) {
    if (l.includes('./src/lib/mockData.ts')) {
      console.log('Found line, length:', l.length);
      const start = l.indexOf('eval(');
      if (start !== -1) {
        const arg = l.substring(start + 5, l.lastIndexOf(');'));
        import('vm').then(({ default: vm }) => {
          const codeStr = vm.runInNewContext(arg);
          const codeLines = codeStr.split('\n');
          console.log('Total codeLines:', codeLines.length);
          for (let i = 575; i <= 595; i++) {
            console.log(`Line ${i}:`, JSON.stringify(codeLines[i - 1]));
          }
        });
      }
    }
  }
}
run().catch(console.error);
