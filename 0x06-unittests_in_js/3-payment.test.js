const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
