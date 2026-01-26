module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "^pages/(.*)$": "<rootDir>/pages/$1"
  }
};
