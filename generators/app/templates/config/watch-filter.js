
var path = require('path');
var WatchFilter = require('watch-filter').default;
const watchFilter = new WatchFilter({

  projectDirectory: path.join(__dirname, '..'),

  folderExcludes: [
    '^.git',
    '^coverage',
    '^node_modules'
  ],

  fileExcludes: [
    '^config/watch-filter.json$',
    '^npm-debug.json$',
    '^package.json$'
  ]

});
module.exports = watchFilter.filter;
