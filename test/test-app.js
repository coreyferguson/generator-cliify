
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var path = require('path');

describe('app', function() {

  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        appName: 'cliify-test',
        appDescription: 'Cliify test.',
        authorName: 'Corey Ferguson',
        authorEmail: 'corey.t.ferguson@gmail.com'
      })
      .on('end', done);
  });

  it('should copy required files', function() {
    assert.file([
      // dot files
      '.babelrc',
      '.gitignore',
      '.npmignore',
      '.jscsrc',

      // root files
      'package.json',

      // bin
      'bin/job.js',

      // config
      'config/argv.json',
      'config/default-config.json',
      'config/release.json',

      // src
      'src/job.js',

      // test
      'test/spec/job.unit.js',
      'test/spec/job.integration.js',
      'test/spec/test-environment.js',
      'test/support/test-utils.js'
    ]);
  });

});
