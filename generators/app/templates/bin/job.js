#!/usr/bin/env node

const winston = require('winston');
const job = require('../babel/job');

job.configure();
job.run().catch(err => {
  winston.log('error', err);
  process.exit(1);
});
