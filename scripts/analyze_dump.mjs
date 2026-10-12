import fs from 'fs';
import vm from 'vm';

const content = fs.readFileSync('scripts/layout_dump.js', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);

for (let i = 330; i <= 342; i++) {
  console.log(`Line ${i} (idx ${i}): length=${lines[i]?.length} preview=${lines[i]?.slice(0, 80)}`);
}

// Let's test compiling with vm.Script line by line or the whole file
console.log('\n--- Testing with vm.Script ---');
try {
  new vm.Script(content, { filename: 'layout_dump.js' });
  console.log('vm.Script parsed WHOLE FILE successfully in Node!');
} catch (err) {
  console.error('vm.Script FAILED on whole file:', err);
}

// But wait! In the browser, what line was line 336?
// Remember in CDP, lineNumber is 0-indexed: lineNumber: 336 means lines[336]!
console.log('\n--- Inspecting lines[336] ---');
const l336 = lines[336];
console.log('Length:', l336.length);
console.log('First 100:', l336.slice(0, 100));
console.log('Last 100:', l336.slice(-100));

// Let's inspect what module this is:
for (let i = 336; i >= 300; i--) {
  if (lines[i].includes('/***')) {
    console.log(`Line ${i}: ${lines[i]}`);
  }
}
