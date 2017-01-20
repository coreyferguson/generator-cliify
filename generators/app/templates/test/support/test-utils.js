
import chai from 'chai';
import sinonLib from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

export const expect = chai.expect;
export const sinon = sinonLib;
