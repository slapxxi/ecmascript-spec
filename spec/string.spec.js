import { expect } from 'chai';

describe('String', () => {
  describe('startsWith()', () => {
    it('returns true if starts with specified string', () => {
      expect('abc'.startsWith('a')).to.eq(true);
    });

    it('allows to specify position where to start', () => {
      expect('abc'.startsWith('b', 1)).to.eq(true);
    });
  });

  describe('endsWith()', () => {
    it('returns true if ends with specified string', () => {
      expect('abc'.endsWith('bc')).to.eq(true);
    });

    it('allows to specify position where to start', () => {
      expect('abc'.endsWith('c', 3)).to.eq(true);
    });
  });

  describe('includes()', () => {
    it('returns true if includes specified string', () => {
      expect('test'.includes('es')).to.eq(true);
    });

    it('allows to specify position where to start', () => {
      expect('abc test'.includes('test', 3)).to.eq(true);
    });
  });

  describe('repeat()', () => {
    it('repeats string', () => {
      expect('a'.repeat(3)).to.eq('aaa');
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

    it('accepts raw strings', () => {
      expect(String.raw`\n`).to.eq('\\n');
    });
  });

  describe('unicode code point escape', () => {
    it('lets specify any code point', () => {
      expect('\u{1F680}').to.eq('\uD83D\uDE80');
    });
  });
});
