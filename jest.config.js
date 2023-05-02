module.exports = {
  preset: 'ts-jest',
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'html'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      useESM: true
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
