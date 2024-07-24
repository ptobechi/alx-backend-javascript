const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when a is 1.4 and b is 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when a is 1.2 and b is 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when a is 1.4 and b is 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return -2 when a is 1.2 and b is 3.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when a is 1.4 and b is 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when b rounds to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });

    it('should return 2 when a is 4.4 and b is 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2), 2);
    });
  });
});
