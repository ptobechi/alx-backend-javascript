const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when a is 1.4 and b is 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when a is 1.2 and b is 3.7', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when a is 1.4 and b is 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return -2 when a is 1.2 and b is 3.7', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when a is 1.4 and b is 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when b rounds to 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });

    it('should return 2 when a is 4.4 and b is 2', () => {
      expect(calculateNumber('DIVIDE', 4.4, 2)).to.equal(2);
    });
  });
});
