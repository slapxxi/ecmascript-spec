import { expect } from 'chai';

describe('Number', () => {
  it('has constants', () => {
    expect(Number.EPSILON).to.eq(2.220446049250313e-16);
    expect(Number.MAX_SAFE_INTEGER).to.eq(9007199254740991);
    expect(Number.MIN_SAFE_INTEGER).to.eq(-9007199254740991);
  });

  describe('isNaN()', () => {
    it('returns true for NaN', () => {
      expect(Number.isNaN(NaN)).to.eq(true);
    });

    it('returns false for other values', () => {
      expect(Number.isNaN('???')).to.eq(false);
      expect(isNaN('???')).to.eq(true);
    });
  });

  describe('isInteger()', () => {
    it('returns true for integers', () => {
      expect(Number.isInteger(3)).to.eq(true);
      expect(Number.isInteger(-3)).to.eq(true);
    });

    it('returns false for not integers', () => {
      expect(Number.isInteger(3.04)).to.eq(false);
      expect(Number.isInteger(-3.04)).to.eq(false);
    });
  });

  describe('isSafeInteger()', () => {
    it('returns true for safe integers', () => {
      expect(Number.isSafeInteger(0)).to.eq(true);
    });

    it('returns false for unsafe integers', () => {
      expect(Number.isSafeInteger(9007199254740992)).to.eq(false);
      expect(Number.isSafeInteger(-9007199254740992)).to.eq(false);
    });
  });

  describe('isFinite()', () => {
    it('returns true for finite numbers', () => {
      expect(Number.isFinite(1)).to.eq(true);
    });

    it('returns false for infinite numbers', () => {
      expect(Number.isFinite(Infinity)).to.eq(false);
    });
  });

  describe('parseFloat()', () => {
    it('parses string into float number', () => {
      expect(Number.parseFloat('1.03')).to.eq(1.03);
    });
  });

  describe('parseInt()', () => {
    it('parses string into int', () => {
      expect(Number.parseInt('1.03', 10)).to.eq(1);
    });

    it('parses hex string into int', () => {
      expect(Number.parseInt('0xFF', 16)).to.eq(255);
    });

    it('does not support octal string', () => {
      expect(Number.parseInt('0o11', 8)).to.eq(0);
      expect(Number.parseInt('11', 8)).to.eq(9);
    });
  });
});
