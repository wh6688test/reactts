module.exports = {
  testEnvironment: 'jsdom',
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(scss|css|jpg|png|gif)$": "<rootDir>/src/tests/file.mock.js"
  },
  testMatch: [ 
    '**/src/**/?(*.)+(test).(js|ts|tsx)', 
  ], 
  testPathIgnorePatterns:["/node_modules/", "/e2e/", "/lib/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/test-coverage",
  coverageThreshold: {
    "global": {
      "branches": 10,
      "functions": 10,
      "lines": 10,
      "statements": -10
    },
    "./src/apps": {
      "branches": 40,
      "statements": 40,
      "functions": 20
    },
    "./src/components": {
      "statements": 20,
      "functions": 20
    }
  },
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true
      }
    },
    "__DEV__": true
  }
};
