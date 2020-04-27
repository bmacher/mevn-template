module.exports = {
  projects: ['<rootDir>/packages/*/jest.config.js'],
  
  collectCoverageFrom: [
    'src/**/*.{ts,vue,tsx}',
  ],
  coverageReporters: ['text', 'text-summary', 'html-spa']
}
