// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// https://medium.com/@alielmajdaoui/linking-local-packages-in-react-native-the-right-way-2ac6587dcfa2
const packagePath = '/Users/ivan/workspace/rn-native-portals';

// module.exports = getDefaultConfig(__dirname);

module.exports = {
  resolver: {
    nodeModulesPaths: [packagePath],
    // rest of metro resolver options...
  },

  // rest of metro options...
  watchFolders: [packagePath],
  ...getDefaultConfig(__dirname)
};
