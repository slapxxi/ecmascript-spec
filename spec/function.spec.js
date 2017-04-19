import { expect } from 'chai';

describe('Function', () => {
  describe('params', () => {
    it('accepts defaults', () => {
      const fn = (p = 'def') => p;
      expect(fn()).to.eq('def');
    });

    it('accepts spread params', () => {
      const fn = (first, ...rest) => [first, rest];
      expect(fn('f')).to.eql(['f', []]);
    });
  });

  describe('calls', () => {
    it('turns spread into arguments', () => {
      const fn = (one, two, three) => [three, two, one];
      expect(fn(...[1, 2, 3])).to.eql([3, 2, 1]);
    });

    it('can simulate named params', () => {
      const fn = ({ first, second }) => [first, second];
      expect(fn({ second: 2, first: 1 })).to.eql([1, 2]);
    });
  });
});
