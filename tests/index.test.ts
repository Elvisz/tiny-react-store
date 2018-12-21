import { createStore } from '@src/index';

const { Consumer, Store, dispatch, withConsumer } = createStore({ count: 1 });

describe('createStore', () => {
  it('createStore', () => {
    expect(Consumer).toBeDefined();
    expect(Store).toBeDefined();
    expect(dispatch).toBeDefined();
    expect(withConsumer).toBeDefined();
  });
});
