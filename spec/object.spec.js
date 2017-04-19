import { expect } from 'chai';

describe('Object', () => {
  describe('.getOwnPropertyNames()', () => {
    it('gets own property names', () => {
      const obj = { test: 'test' };
      expect(Object.getOwnPropertyNames(obj)).to.eql(['test']);
    });

    it('gets both enum and not enum property names', () => {
      const obj = {};
      Object.defineProperty(obj, 'a', { enumerable: false, value: 'test' });
      Object.defineProperty(obj, 'b', { enumerable: true, value: 'test' });
      expect(Object.getOwnPropertyNames(obj)).to.eql(['a', 'b']);
    });
  });

  describe('.getOwnPropertySymbols()', () => {
    it('gets own property symbols', () => {
      const sym = Symbol('test');
      const obj = { [sym]: 'test' };
      expect(Object.getOwnPropertySymbols(obj)).to.eql([sym]);
    });

    it('ignores property strings', () => {
      const sym = Symbol('test');
      const obj = { [sym]: 'test', test: 'test' };
      expect(Object.getOwnPropertySymbols(obj)).to.eql([sym]);
    });
  });

  describe('.keys()', () => {
    it('gets enumerable string properties', () => {
      const sym = Symbol('test');
      const obj = { [sym]: 'test', test: 'test' };
      expect(Object.keys(obj)).to.eql(['test']);
    });
  });

  describe('.defineProperty()', () => {
    it('defines property on object', () => {
      const obj = {};
      Object.defineProperty(
        obj,
        'test',
        { enumerable: true, value: 'test' },
      );
      expect(obj).to.eql({ test: 'test' });
    });

    it('accepts enumerable flag', () => {
      const obj = {};
      Object.defineProperty(
        obj,
        'test',
        { enumerable: false, value: 'test' },
      );
      expect(obj).to.eql({});
      expect(obj.test).to.eq('test');
    });
  });
});
