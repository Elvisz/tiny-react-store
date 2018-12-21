import { BehaviorSubject } from 'rxjs';

import getDispatcher from '@src/getDispatcher';

describe('getDispatcher', () => {
  it('dispatcher state should be work', () => {
    const subject = new BehaviorSubject({
      count: 0,
    });
    const dispatcher = getDispatcher(subject);

    subject.subscribe(value => expect(value.count).toEqual(0));

    dispatcher({ count: 1 });
  });

  it('dispatcher state fn should be work', () => {
    const subject = new BehaviorSubject({
      count: 0,
    });
    const dispatcher = getDispatcher(subject);

    subject.subscribe(value => expect(value.count).toEqual(0));

    dispatcher(() => ({ count: 1 }));
  });

  it('dispatcher will not work if shallow equal', () => {
    const subject = new BehaviorSubject({
      count: 0,
    });
    const dispatcher = getDispatcher(subject);
    const fn = jest.fn();

    subject.subscribe(fn);

    dispatcher({ count: 1 });
    expect(fn.mock.calls.length).toEqual(2);

    dispatcher({ count: 1 });
    expect(fn.mock.calls.length).toEqual(2);
  });
});
