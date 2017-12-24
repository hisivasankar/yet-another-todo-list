const path = require('path');
var root = path.resolve(__dirname, '..');
module.exports = {
    rootDir: root,
    setupFiles: [path.resolve(__dirname, 'jest.setup.js')]
}