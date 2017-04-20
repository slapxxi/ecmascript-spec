import { expect } from 'chai';
import { createArray } from '../src/proxy';

describe('Proxy', () => {
  it('intercepts getting property', () => {
    const target = {};
    const handler = {
      get() {
        return 'constant';
      },
    };
    const proxy = new Proxy(target, handler);
    expect(proxy.foo).to.eq('constant');
  });

  it('intercepts checking property', () => {
    const target = {};
    const handler = {
      has() {
        return true;
      },
    };
    const proxy = new Proxy(target, handler);
    expect('prop' in proxy).to.eq(true);
  });

  describe('createArray()', () => {
    it('allows to use negative indices', () => {
      const arr = createArray(1, 2, 3);
      expect(arr[-1]).to.eq(3);
    });

    it('returns undefined when there are no items', () => {
      const arr = createArray();
      expect(arr.length).to.eq(0);
      expect(arr[-1]).to.eq(undefined);
    });
  });
});
