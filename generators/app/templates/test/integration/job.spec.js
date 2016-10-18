
import { expect, sinon } from '../support/test-utils';
import { configure, run } from '../../src/job';
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
    configure();
    // manually set arguments
    nconf.set('username', 'corey');
    nconf.set('password', 'Password');
    // test + verify
    return run().then(credentials => {
      expect(credentials[0]).to.equal('corey');
      expect(credentials[1]).to.equal('Password');
    });
  });

});
