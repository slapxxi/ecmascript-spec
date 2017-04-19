import { expect } from 'chai';

describe('Symbol', () => {
  const sym = Symbol('test');

  it('is created with Symbol factory', () => {
    expect(typeof sym).to.eq('symbol');
  });

  it('throws TypeError when used as constructor', () => {
    const fn = () => new Symbol('test');
    expect(fn).to.throw(TypeError);
  });


  it('is unique', () => {
    expect(sym !== Symbol('test')).to.eq(true);
  });

  it('can be converted to String', () => {
    expect(sym.toString()).to.eq('Symbol(test)');
  });

  it('throws exception when coerced to String', () => {
    const coerce = () => `${sym}`;
    expect(coerce).to.throw(TypeError);
  });

  it('can be used as property key', () => {
    const obj = {};
    obj[sym] = 'test';
    expect(obj[sym]).to.eq('test');
  });

  it('can be used as computed property key', () => {
    const obj = {
      [sym]: 'test',
    };
    expect(obj[sym]).to.eq('test');
  });

  it('can be used as computed method definition', () => {
    const obj = {
      [sym]() { return 'test'; },
    };
    expect(obj[sym]()).to.eq('test');
  });

  it('can be used to create private properties', () => {
    class Test {
      static sym = Symbol('private');

      constructor() {
        this[Test.sym] = 'private';
      }

      get() {
        return this[Test.sym];
      }
    }
    const result = new Test();
    expect(result.get()).to.eq('private');
    expect(result.private).to.eq(undefined);
  });
});
