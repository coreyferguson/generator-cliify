
# Cliify, Yeoman Generator

## Usage

```bash
npm install -g yo generator-cliify
yo cliify
cd my-project
npm install
npm test
```

## Features

- Hierarchical configuration with files, environment variables, command-line arguments, and atomic object merging; [nconf][]
- Prompt for missing/sensitive arguments; [Inquirer.js][]
- ES5 + ES6 source; [Babel][]
- Unit testing, integration testing, mocking, code coverage; [Mocha][], [Chai][], [Sinon.JS][], [Istanbul][]
- Version controlled; [Release It!][]
- JavaScript style enforcement; [JSCS][]

[Babel]: https://babeljs.io/
[Chai]: http://chaijs.com/
[Inquirer.js]: https://github.com/SBoudrias/Inquirer.js
[Istanbul]: https://github.com/gotwarlost/istanbul
[JSCS]: https://github.com/jscs-dev/node-jscs
[Mocha]: https://mochajs.org/
[nconf]: https://github.com/indexzero/nconf
[Release It!]: https://github.com/webpro/release-it
[Sinon.JS]: http://sinonjs.org/

## Project Structure

```bash
└─ $ tree -I 'node_modules'
.
├── babel                            // transpiled source code
├── bin
│   └── job.js                       // executable script exposed by package.json "bin" property
├── coverage                         // line coverage reports
├── config
│   ├── argv.json                    // required/optional command line arguments
│   ├── default-config.json          // default configuration options
│   └── release.json                 // release configuration
├── package.json                     // npm package information
├── src
│   └── job.js                       // put your business logic here
└── test
    ├── integration
    │   └── job.spec.js              // integration test
    ├── support
    │   └── test-utils.js            // test configuration
    └── unit
        ├── job.spec.js              // unit test
        └── test-environment.spec.js // test environment validation
```
