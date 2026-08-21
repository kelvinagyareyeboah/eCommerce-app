const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

if (!config.resolver.sourceExts.includes('jsx')) {
  config.resolver.sourceExts.push('jsx');
}

module.exports = config;
