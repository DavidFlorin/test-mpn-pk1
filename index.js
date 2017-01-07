const common = require('test-npm-common1');

common()

module.exports = () => {
  return 'This is package 1 v2; common: ' + common()
}
