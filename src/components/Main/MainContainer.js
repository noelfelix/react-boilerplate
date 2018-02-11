import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './mainContainer.css'; //TODO verify hot reload still does not work with inline styles otherwise go inline

export class MainContainer extends Component {
  //TODO REMOVE/ALTER LINK ON FIRST ROUTES
  render() {
    return (
      <div>
        <Link to="/NAV_STUB">NAV_STUB</Link>
      </div>
    );
  }
}