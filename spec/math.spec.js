import { expect } from 'chai';

describe('Math', () => {
  describe('.sign()', () => {
    it('returns 1 for positive sign', () => {
      expect(Math.sign(3)).to.eq(1);
    });

    it('returns 0 for no sign', () => {
      expect(Math.sign(0)).to.eq(0);
    });

    it('returns -1 for negative sign', () => {
      expect(Math.sign(-3)).to.eq(-1);
    });
  });

  describe('.trunc()', () => {
    it('removes decimal fraction of number', () => {
      expect(Math.trunc(1.03)).to.eq(1);
      expect(Math.trunc(-3.03)).to.eq(-3);
    });
  });

  describe('.log10()', () => {
    it('computes logarithm to base 10', () => {
      expect(Math.log10(100)).to.eq(2);
    });
  });

  describe('.hypot()', () => {
    it('computes square root of squares of its args', () => {
      expect(Math.hypot(3, 9)).to.eq(Math.sqrt(3 ** 2 + 9 ** 2));
    });
  });
});
