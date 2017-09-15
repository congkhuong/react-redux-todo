import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import AppLayout from './components/layouts/AppLayout';
import Home from './components/Home';

export default function getRoutes() {

  return (
    <Route
      path="/"
      component={App}
      onChange={(prevState) => {
       	//const { pathname, query } = prevState.location;
      }}
    >
      <Route component={AppLayout}>
        <IndexRoute component={Home} />
        <Route component={Home} />
      </Route>
    </Route>
  );
}
