import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { getStore } from './getStore';
import { Router } from './Router';

const store = getStore();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}