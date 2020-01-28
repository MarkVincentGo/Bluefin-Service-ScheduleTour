/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  ignorePatterns: 'public/bundle.js',
  extends: './node_modules/eslint-config-hackreactor/index.js',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module"
  },
  plugins: "jest"
};
