import { expect } from 'chai';

describe('Destructuring', () => {
  describe('objects', () => {
    it('destructures by keys', () => {
      const obj = { first: 'First', last: 'Last' };
      const { first: f, last: l } = obj;
      expect(f).to.eq('First');
      expect(l).to.eq('Last');
    });

    it('accepts shorthand notation', () => {
      const obj = { first: 'First', last: 'Last' };
      const { first, last } = obj;
      expect(first).to.eq('First');
      expect(last).to.eq('Last');
    });

    it('coerces right-hand values to objects', () => {
      const { length: l } = 'abc';
      expect(l).to.eq('abc'.length);
    });

    it('accepts default values', () => {
      const obj = {};
      const { first: f = 'def', last: l = 'def' } = obj;
      expect(f).to.eq('def');
      expect(l).to.eq('def');
    });

    it('accepts computed properties', () => {
      const name = 'dynamic';
      const obj = { dynamic: 'test' };
      const { [name]: d } = obj;
      expect(d).to.eq('test');
    });
  });

  describe('iterables', () => {
    it('destructures by position', () => {
      const values = [1, 2, 3];
      const [first, second, third] = values;
      expect(first).to.eq(1);
      expect(second).to.eq(2);
      expect(third).to.eq(3);
    });

    it('supports spreads', () => {
      const [first, ...rest] = 'test';
      expect(first).to.eq('t');
      expect(rest).to.eql(['e', 's', 't']);
    });

    it('with spread defaults to []', () => {
      const [first, ...rest] = 'a';
      expect(first).to.eq('a');
      expect(rest).to.eql([]);
    });

    it('accepts default values', () => {
      const values = [];
      const [a = 'def', b = 'def'] = values;
      expect(a).to.eq('def');
      expect(b).to.eq('def');
    });

    it('allows to skip elements', () => {
      const values = [1, 2, 3];
      const [, second, third] = values;
      expect(second).to.eq(2);
      expect(third).to.eq(3);
    });

    it('throws error if not iterable', () => {
      const fn = () => {
        const [a, b] = undefined;
        return [a, b];
      };
      expect(fn).to.throw(TypeError);
    });
  });

  describe('default values', () => {
    it('can refer to other values in the pattern', () => {
      const [a = 1, b = a] = [];
      expect(a).to.eq(1);
      expect(b).to.eq(1);
    });
  });

  describe('function params', () => {
    it('destructures by object keys', () => {
      const fn = ({ first, last }) => [first, last];
      expect(fn({ first: 'f', last: 'l' })).to.eql(['f', 'l']);
    });
  });
});
