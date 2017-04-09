
import { expect, sinon } from '../support/test-utils';

describe('test environment unit tests', function() {

  it('"describe" and "it" defined', function() {
    // if we've gotten this far without error... SUCCESS!
  });

  it('"expect" is defined', function() {
    expect(true).to.be.true;
  });

  it('"sinon" is defined', function() {
    const stub = sinon.stub();
    stub();
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledTwice).to.be.false;
  });

  it('"sinon-chai" is used', function() {
    const stub = sinon.stub();
    stub();
    stub();
    // sinon-chai allows for "to.be.calledOnce" API.
    // If it's not properly wired with chai this function will not throw
    // an error.
    return expect(() => {
      expect(stub).to.be.calledOnce;
    }).to.throw(Error);
  });

});
