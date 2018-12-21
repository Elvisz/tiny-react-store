import * as React from 'react';
import { BehaviorSubject } from 'rxjs';

import getDispatcher from './getDispatcher';
import getStore from './getStore';
import getWithConsumer from './getWithConsumer';

export const createStore = <TStore extends object = {}>(init: TStore) => {
  const subject = new BehaviorSubject<TStore>(init);
  const { Consumer, Provider } = React.createContext<TStore>(init);

  const Store = getStore<TStore>(subject, Provider);
  const dispatch = getDispatcher<TStore>(subject);
  const withConsumer = getWithConsumer<TStore>(Consumer);

  return {
    Consumer,
    Store,
    dispatch,
    withConsumer,
  };
};
