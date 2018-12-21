import isShallowEqual from '@src/isShallowEqual';

describe('isShallowEqual', () => {
  it('isShallowEqual should be work', () => {
    const source = {};
    expect(isShallowEqual(source, source)).toEqual(true);
    expect(isShallowEqual({}, {})).toEqual(true);
    expect(isShallowEqual({ a: [] }, { a: [] })).toEqual(false);
    expect(isShallowEqual({ a: 'test' }, { a: 'test' })).toEqual(true);
    expect(isShallowEqual({ a: 'test' }, { b: 'test' })).toEqual(false);
    expect(isShallowEqual({ a: 1 }, { a: 1 })).toEqual(true);
    expect(isShallowEqual({ a: 1 }, { a: 1, b: 2 })).toEqual(false);
    expect(isShallowEqual({ a: /test/ }, { a: /test/ })).toEqual(true);
    expect(isShallowEqual({ a: /test/ }, { a: /test1/ })).toEqual(false);
    expect(
      isShallowEqual({ a: (): null => null }, { a: (): null => null })
    ).toEqual(true);
    expect(
      isShallowEqual({ a: (): null => null }, { a: (): number => 1 })
    ).toEqual(false);
  });
});
