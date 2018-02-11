import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { getStore } from './getStore';
import {
  MainContainer,
  NAV_STUB,
} from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = getStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact
              path="/NAV_STUB"
              component={NAV_STUB} />
            <Route exact
              path="/"
              component={MainContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;