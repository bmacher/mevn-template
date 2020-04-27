const packageName = require('./package.json').name.split('@mevn/').pop();

console.info(__dirname);
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  name: packageName,
  displayName: packageName,
  testMatch: [
    '**/*.(spec|test).ts',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,vue,tsx}',
  ],
  coverageReporters: ['text', 'text-summary', 'html-spa'],
};
