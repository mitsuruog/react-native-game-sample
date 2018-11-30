import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import Home from './src/components/Home.connect';
import { rootReducers } from './src/reducers';

// Create store
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const store = createStore(rootReducers, composeEnhancers());

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}