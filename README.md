# tiny-react-store

[![Build Status](https://travis-ci.org/Elvisz/tiny-react-store.svg?branch=master)](https://travis-ci.org/Elvisz/tiny-react-store)

An example for react store based on rxjs and context api.

# docs

## createStore

```typescript
import * as React from 'react';

interface IStore {
  name: string;
  age: number;
}
const { Consumer, Store, dispatch, withConsumer } = createStore<IStore>({
  name: 'test',
  age: 22,
});

class App extends React.Component {
  public update = () => {
    dispatch(({ age }) => ({
      age: age + 1,
    }));
  };

  public render() {
    return (
      <Store>
        <div>
          <button onClick={this.update}>store update</button>
          <Consumer>{({ count }) => `store.count: ${count}`}</Consumer>
        </div>
      </Store>
    );
  }
}
```

## withConsumer

```typescript
const Component = withConsumer(({ name, age }) => ({
  user: `${name}: ${age}`,
}))(({ user }) => {
  <div>{user}</div>;
});
```
