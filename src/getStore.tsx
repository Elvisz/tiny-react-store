import * as React from 'react';
import { BehaviorSubject, Subscription } from 'rxjs';

export default <TStore extends object = {}>(
  subject: BehaviorSubject<TStore>,
  Provider: React.Provider<TStore>
) =>
  class Store extends React.Component {
    private subscription: Subscription | null = null;

    public componentDidMount() {
      this.subscription = subject.subscribe(() => this.forceUpdate());
    }

    public componentWillUnmount() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }

    public render() {
      const { children } = this.props;

      return <Provider value={subject.getValue()}>{children}</Provider>;
    }
  };
