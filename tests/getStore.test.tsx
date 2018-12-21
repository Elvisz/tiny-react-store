import { mount } from 'enzyme';
import * as React from 'react';
import { BehaviorSubject } from 'rxjs';

import getStore from '@src/getStore';

interface IProps {
  count: number;
}

const subject = new BehaviorSubject<IProps>({
  count: 0,
});

const { Provider, Consumer } = React.createContext<IProps>({
  count: 0,
});

describe('getStore', () => {
  it('Store should be work', () => {
    const Component = jest.fn(() => null);
    const Store = getStore<IProps>(subject, Provider);
    const wrapper = mount(
      <Store>
        <Consumer>{Component}</Consumer>
      </Store>
    );

    expect(Component.mock.calls.length).toEqual(1);
    expect(Component.mock.calls[0][0]).toEqual({
      count: 0,
    });

    subject.next({
      count: 1,
    });
    expect(Component.mock.calls.length).toEqual(2);
    expect(Component.mock.calls[1][0]).toEqual({
      count: 1,
    });

    wrapper.unmount();
    subject.next({
      count: 2,
    });
    expect(Component.mock.calls.length).toEqual(2);
  });
});
