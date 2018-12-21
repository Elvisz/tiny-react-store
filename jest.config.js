module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  coverageDirectory: './.coverage',
  coverageReporters: ['html', 'json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  setupFiles: ['<rootDir>/tests/config/setup.js'],
  testMatch: [
    '<rootDir>/tests/**/?(*.)(spec|test).(j|t)s?(x)',
    '<rootDir>/tests/**/__tests__/**/*.(j|t)s?(x)',
  ],
  testURL: 'http://localhost',
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^@src/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'mjs',
    'node',
    'ts',
    'tsx',
    'web.js',
    'web.jsx',
    'web.ts',
    'web.tsx',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.commonjs.json',
      diagnostics: false,
    },
  },
};
