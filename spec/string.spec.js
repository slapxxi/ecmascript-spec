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

    it('accepts escape sequences', () => {
      const v = 'test';
      expect(`\`${v}\``).to.eq('`test`');
    });
  });

  describe('unicode code point escape', () => {
    it('lets specify any code point', () => {
      expect('\u{1F680}').to.eq('\uD83D\uDE80');
    });
  });

  describe('iteration', () => {
    it('allows to iterate over chars', () => {
      const result = [];
      for (const ch of 'test') {
        result.push(ch);
      }
      expect(result).to.eql(['t', 'e', 's', 't']);
    });

    it('allows to use spread operator to turn into array', () => {
      expect([...'abc']).to.eql(['a', 'b', 'c']);
    });

    it('honors unicode code points', () => {
      expect([...'x\uD83D\uDE80y'].length).to.eq(3);
    });
  });

  describe('codePointAt()', () => {
    it('returns code point of char', () => {
      expect('x\uD83D\uDE80y'.codePointAt(1).toString(16)).to.eq('1f680');
    });
  });

  describe('.fromCodePoint()', () => {
    it('returns string from code points', () => {
      expect(String.fromCodePoint(0x78, 0x1f680)).to.eq('x\uD83D\uDE80');
    });
  });
});
