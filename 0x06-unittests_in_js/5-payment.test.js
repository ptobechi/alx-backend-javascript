const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log the correct message for totalAmount 100 and totalShipping 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message for totalAmount 10 and totalShipping 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
