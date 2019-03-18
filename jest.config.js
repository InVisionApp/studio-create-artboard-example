module.exports = {
  verbose: true,
  testURL: 'http://localhost',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '.*(test|spec)\\.(tsx|ts|js|jsx)$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
