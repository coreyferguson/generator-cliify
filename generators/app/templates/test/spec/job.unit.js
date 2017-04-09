
import { expect, sinon } from '../support/test-utils';
import job from '../../src/job';
import * as nquirer from 'nquirer';
import winston from 'winston';

describe('job unit tests', function() {

  let sandbox;

  before(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('outputs username and password', function() {
    const nconfMock = { get: property => property };
    sandbox
      .stub(nquirer, 'inquire')
      .returns(Promise.resolve(nconfMock));
    const log = sandbox.stub(winston, 'log');
    return job.run().then(credentials => {
      expect(log).to.be.calledWith('debug', 'Username: username');
      expect(log).to.be.calledWith('silly', '(__)');
      expect(log).to.be.calledWith('silly', `(oo) <-- username`);
      expect(log).to.be.calledWith('silly', ' \\/');
    });
  });

});
