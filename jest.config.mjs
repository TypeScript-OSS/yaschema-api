export default {
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
  moduleNameMapper: {
    '(.+)\\.js': '$1'
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
