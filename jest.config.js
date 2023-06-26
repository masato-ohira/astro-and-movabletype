module.exports = {
  // testMatch: ['**/__tests__/**/*.ts', '**/__tests__/**/*.js'],
  testEnvironment: 'jsdom',
  // preset: 'ts-jest',
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jest-environment-jsdom',
}
