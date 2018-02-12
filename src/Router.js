import React, { Component } from 'react';
import {
  MainContainer,
  NAV_STUB,
} from './components';
import { BrowserRouter, Route } from 'react-router-dom';

export class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact
            path="/NAV_STUB"
            component={NAV_STUB} />
          <Route exact
            path="/"
            component={MainContainer} />
        </div>
      </BrowserRouter>
    );
  }
}