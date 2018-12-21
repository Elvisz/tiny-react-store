import { ReactWrapper } from 'enzyme';

export const setPropsAsync = (wrapper: ReactWrapper, props: object) =>
  new Promise(resolve => wrapper.setProps(props, () => resolve()));

export const setStateAsync = (wrapper: ReactWrapper, state: object) =>
  new Promise(resolve => wrapper.setState(state, () => resolve()));
