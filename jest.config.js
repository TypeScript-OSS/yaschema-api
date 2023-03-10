module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'html'],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 90,
      lines: 50,
      statements: 50
    }
  }
};
