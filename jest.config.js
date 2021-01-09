module.exports = {
  testEnvironment: 'jsdom',
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(scss|css|jpg|png|gif)$": "<rootDir>/src/tests/file.mock.ts"
  },
  testMatch: [ 
    '**/src/**/?(*.)+(test).(js|ts|tsx)', 
  ], 
  testPathIgnorePatterns:["/node_modules/", "/e2e/", "/lib/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/test-coverage",
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true
      }
    }
  },
};
