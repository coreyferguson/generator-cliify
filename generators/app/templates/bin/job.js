#!/usr/bin/env node

const winston = require('winston');

const job = require('../babel/job');
const configure = job.configure;
const run = job.run;

configure();
run().then(credentials => {
  winston.log('info', 'Success!');
  winston.log('info', credentials);
}).catch(err => {
  winston.log('error', err);
});
