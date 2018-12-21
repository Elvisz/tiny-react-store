import * as React from 'react';

export default <TStore extends object = {}>(
  Consumer: React.Consumer<TStore>
) => <TProps extends object = {}, TFiltered extends object = TStore>(
  filter: (store: TStore) => TStore | TFiltered = store => store
) => (
  Component: React.ComponentType<(TStore | TFiltered) & TProps>
): React.FunctionComponent<TProps> => props => (
  <Consumer>
    {store => (
      <Component
        {...{
          ...props,
          ...filter(store),
        }}
      />
    )}
  </Consumer>
);
