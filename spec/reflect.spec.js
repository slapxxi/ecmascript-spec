import { expect } from 'chai';

describe('Reflect', () => {
  describe('.ownKeys()', () => {
    it('gets all property keys', () => {
      const sym = Symbol('test');
      const obj = { [sym]: 'test', test: 'test' };
      expect(Reflect.ownKeys(obj)).to.eql(['test', sym]);
    });
  });
});
