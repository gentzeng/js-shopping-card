module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  testResultsProcessor: "jest-sonar-reporter",
  coveragePathIgnorePatterns: [
    "./node_modules/",
    "./app/tests",
    "./coverage"
  ]
}