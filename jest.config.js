const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
  coveragePathIgnorePatterns: ["/node_modules"],
  moduleFileExtensions: ["js", "jsx"],
  testEnvironment: "jsdom",
  testMatch: ["**/*.(test|spec).js"],
};

module.exports = createJestConfig(customJestConfig);
