
import { nconf, necessitate, inquire } from 'nquirer';
import winston from 'winston';

import argvConfig from '../config/argv.json';
import defaultConfig from '../config/default-config.json';

export class Job {

  configure() {

    // Default nconf configuration
    // https://github.com/indexzero/nconf
    nconf
      .argv(argvConfig)
      .env()
      .defaults(defaultConfig)
      .file('default-config.json');

    // Logging
    // https://github.com/winstonjs/winston#logging-levels
    winston.level = nconf.get('logLevel');

    // Prompt for missing configurations via Inquirer questions.
    // Questions passed directly to Inquirer.
    // https://github.com/SBoudrias/Inquirer.js#questions
    necessitate([{
      type: 'password',
      name: 'password',
      message: 'Password'
    }]);

  }

  run() {
    // Prompt for missing configurations and continue with application logic...
    return inquire().then(nconf => {
      const username = nconf.get('username');
      const password = nconf.get('password');

      winston.log('info', 'Retrieved credentials from nconf');
      winston.log('debug', `Username: ${username}`);

      winston.log('silly', '(__)');
      winston.log('silly', `(oo) <-- ${username}`);
      winston.log('silly', ' \\/');

      winston.log('info', 'Job complete.');
      return [username, password];
    });
  }

}

const instance = new Job();
export default instance;
