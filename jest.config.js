module.exports = {
    preset: 'react-native',
    setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
    coveragePathIgnorePatterns: ['jest-setup.js'],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-navigation/stack|react-navigation-deprecated-tab-navigator|@react-navigation/core|@react-navigation/native)',
    ],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    testRegex: '/__tests__/.*\\.(test|spec)\\.(js|tsx?)$',
    testEnvironment: 'node',
    transform: {
      '^.+\\.(js|ts|tsx)$': 'babel-jest',
    },
  };