import { BehaviorSubject } from 'rxjs';

import isShallowEqual from './isShallowEqual';

type DispatcherFn<TStore> = (current: TStore) => Partial<TStore>;

export default <TStore extends object = {}>(subject: BehaviorSubject<TStore>) => (
  state: Partial<TStore> | DispatcherFn<TStore>
) => {
  const current = subject.getValue();

  const updated = {
    ...current,
    ...(typeof state === 'function' ? state(current) : state),
  };

  if (!isShallowEqual(current, updated)) {
    subject.next(updated);
  }
};
