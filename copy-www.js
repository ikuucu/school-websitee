// Copies the website files into ./www so Capacitor can wrap them as a phone app.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
const items = ['index.html', 'manifest.webmanifest', 'sw.js', 'icons'];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const item of items) {
  fs.cpSync(path.join(root, item), path.join(out, item), { recursive: true });
}
console.log('Copied', items.join(', '), 'to www/');
