
import { expect, sinon } from '../support/test-utils';
import job from '../../src/job';
import { nconf } from 'nquirer';
import winston from 'winston';

describe('job integration tests', function() {

  let sandbox;
  let log;

  before(function() {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(function() {
    // stub out CLI argv requirements
    sandbox.stub(nconf, 'argv').returns(nconf);
    // stub logs for clean test output
    log = sandbox.stub(winston, 'log');
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('resolve credentials', function() {
    job.configure();
    // manually set arguments
    nconf.set('username', 'corey');
    nconf.set('password', 'Password');
    // test + verify
    return expect(job.run()).to.eventually.eql(['corey', 'Password']);
  });

});
