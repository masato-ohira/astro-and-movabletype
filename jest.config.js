module.exports = {
  // testMatch: ['./__tests__/**/*.{js|ts}'],
  // testEnvironment: 'jsdom',
  // // モジュールのマッピングを指定します
  // moduleNameMapper: {
  //   // CSS モジュールをモックするための設定例
  //   '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  // },
  preset: 'ts-jest',
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jest-environment-jsdom',
}
