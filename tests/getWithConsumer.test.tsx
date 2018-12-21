import { mount } from 'enzyme';
import * as React from 'react';

import getWithConsumer from '@src/getWithConsumer';

interface IProps {
  count: number;
}

const { Provider, Consumer } = React.createContext<IProps>({
  count: 0,
});

describe('getWithConsumer', () => {
  it('withConsumer state should be work', () => {
    const Component = jest.fn(() => null);
    const HOC = getWithConsumer<IProps>(Consumer)()(Component);
    mount(
      <Provider
        value={{
          count: 1,
        }}
      >
        <HOC />
      </Provider>
    );

    expect(Component.mock.calls.length).toEqual(1);
    expect(Component.mock.calls[0][0]).toEqual({
      count: 1,
    });
  });

  it('withConsumer filter state should be work', () => {
    const Component = jest.fn(() => null);
    const HOC = getWithConsumer<IProps>(Consumer)(({ count }) => ({
      v: count,
    }))(Component);
    mount(
      <Provider
        value={{
          count: 1,
        }}
      >
        <HOC />
      </Provider>
    );

    expect(Component.mock.calls.length).toEqual(1);
    expect(Component.mock.calls[0][0]).toEqual({
      v: 1,
    });
  });
});
