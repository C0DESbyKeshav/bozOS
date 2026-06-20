module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "^pages/(.*)$": "<rootDir>/pages/$1"
  }
};
