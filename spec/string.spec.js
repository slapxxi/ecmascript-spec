import { expect } from 'chai';

describe('String', () => {
  describe('startsWith()', () => {
    it('returns true if starts with specified string', () => {
      expect('abc'.startsWith('a')).to.eq(true);
    });
  });

  describe('endsWith()', () => {
    it('returns true if ends with specified string', () => {
      expect('abc'.endsWith('bc')).to.eq(true);
    });
  });

  describe('includes()', () => {
    it('returns true if includes specified string', () => {
      expect('test'.includes('es')).to.eq(true);
    });
  });

  describe('template literal', () => {
    it('places values where specified', () => {
      expect(`${100} ${200}`).to.eq('100 200');
    });

    it('accepts multiline strings', () => {
      const result = `
        test
      `;
      expect(result).to.eq('\n        test\n      ');
    });

    it('accepts raw strings', function () {
      const result = String.raw`\n`;
      expect(result).to.eq('\\n');
    });
  });

  describe('unicode code point escape', () => {
    it('lets specify any code point', () => {
      expect('\u{1F680}').to.eq('\uD83D\uDE80');
    });
  });
});
