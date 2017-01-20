
var generators = require('yeoman-generator');
var s = require('underscore.string');

/**
 * Base generator functionality.
 *
 * Methods executed according to yeoman run context:
 *   http://yeoman.io/authoring/running-context.html
 */
module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  /**
   * #2 in Yeoman run context.
   * Retrieve customization options from user.
   * https://github.com/SBoudrias/Inquirer.js
   */
  prompting: function() {
    const questions = [{
      type: 'input',
      name: 'appName',
      message: 'Your library name:',
      default: 'cliify-test',
      store: false,
      validate: function(input) {
        if (input !== null && input !== undefined &&
            input.match(/^[\w-]+$/)) {
          return true;
        } else {
          return 'Name must only use lowercase letters, numbers and dashes: ^[a-z\-\d]+$';
        }
      }
    }, {
      type: 'input',
      name: 'appDescription',
      message: 'Short description:',
      default: 'Test cliify project',
      store: false,
      validate: function(input) {
        if (input !== null && input !== undefined && input !== '') return true;
        else return 'Description cannot be null or empty.';
      }
    }, {
      type: 'confirm',
      name: 'isNpmSameAsAppName',
      message: 'Is the name in NPM registry the same as the app name?',
      default: true,
      store: false
    }, {
      type: 'input',
      name: 'npmName',
      message: 'Your preferred NPM module name:',
      store: false,
      when: function(answers) {
        return !answers.isNpmSameAsAppName;
      },
      validate: function(input) {
        if (input !== null && input !== undefined &&
            input.match(/^[\/\@\w-]+$/)) {
          return true;
        } else {
          return 'Name must only use lowercase letters, numbers and dashes: ^[a-z\-\d]+$';
        }
      }
    }, {
      type: 'input',
      name: 'authorName',
      message: 'Author name:',
      store: true,
      validate: function(input) {
        if (input !== null && input !== undefined && input !== '') return true;
        else return 'Author name cannot be null or empty.';
      }
    }, {
      type: 'input',
      name: 'authorEmail',
      message: 'Author email:',
      store: true,
      validate: function(input) {
        if (input !== null && input !== undefined && input !== '') return true;
        else return 'Author email cannot be null or empty.';
      }
    }, {
      type: 'input',
      name: 'gitRepository',
      message: 'Git Repository:',
      store: false,
      default: 'TODO'
    }];

    return this.prompt(questions).then(answers => {
      this.appName = answers.appName;
      this.appDescription = answers.appDescription;
      this.npmName = answers.npmName;
      this.authorName = answers.authorName;
      this.authorEmail = answers.authorEmail;
      this.gitRepository = answers.gitRepository;
    });
  },

  /**
   * #3 in Yeoman run context.
   * Configure generator.
   */
  configuring: function() {
    // create project in new folder with chosen appName
    this.destinationRoot(this.appName);
  },

  /**
   * #5 in Yeoman run context.
   * Write templates to destination.
   */
  writing: function() {
    var model = this._generateTemplateModel();
    this.fs.copyTpl(this.templatePath('**/*'), this.destinationPath(), model);
    this.fs.move(this.destinationPath('_dot_gitignore'), this.destinationPath('.gitignore'));
    this.fs.move(this.destinationPath('_dot_jscsrc'), this.destinationPath('.jscsrc'));
    this.fs.move(this.destinationPath('_dot_babelrc'), this.destinationPath('.babelrc'));
    this.fs.move(this.destinationPath('_dot_npmignore'), this.destinationPath('.npmignore'));
  },

  /**
   * Creates a model object passed into all templates.
   */
  _generateTemplateModel: function() {
    return {
      appName: this.appName,
      appClassName: s.classify(this.appName),
      appInstanceName: s.camelize(this.appName),
      appDescription: this.appDescription,
      npmName: this.npmName || this.appName,
      authorName: this.authorName,
      authorEmail: this.authorEmail,
      gitRepository: this.gitRepository
    };
  }

});
