
var path = require('path');

// configuration
var config = require('../../config/watch-filter-config.json');

// folder excludes
config.folderExcludes = config.folderExcludes || [];
var folderExcludes = config.folderExcludes.map(function(string) {
  return new RegExp(string);
});

// file excludes
config.fileExcludes = config.fileExcludes || [];
var fileExcludes = config.fileExcludes.map(function(string) {
  return new RegExp(string);
});

/**
 * Filter function used by https://github.com/mikeal/watch
 */
module.exports = function filter(f, stat) {
  var file = parseRelativePath(f);
  if (stat.isDirectory() && (
      isExcludedDirectory(file))
  ) {
    return false;
  } else if (stat.isFile() && (
      isExcludedFile(file))
  ) {
    return false;
  } else {
    return true;
  }
};

/**
 * Returns a new stirng of path relative to project root
 */
function parseRelativePath(f) {
  var root = path.join(__dirname, '../../');
  return f.replace(root, '');
}

/**
 * Indicates if directory is excluded from watch
 */
function isExcludedDirectory(directory) {
  for (var i=0; i<folderExcludes.length; i++) {
    if (folderExcludes[i].test(directory)) {
      return true;
    }
  }
  return false;
}

/**
 * Indicates if file is excluded from watch
 */
function isExcludedFile(file) {
  for (var i=0; i<fileExcludes.length; i++) {
    if (fileExcludes[i].test(file)) {
      return true;
      break;
    }
  }
  return false;
}
