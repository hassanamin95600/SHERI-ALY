const fs = require('fs');
const path = require('path');

console.log('Building providers...');
if (!fs.existsSync(path.join(__dirname, 'providers'))) {
  fs.mkdirSync(path.join(__dirname, 'providers'));
}
console.log('Build completed successfully.');
