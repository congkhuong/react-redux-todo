import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import AppLayout from './components/layouts/AppLayout';
import Home from './components/Home';
import About from './components/About';
import OrderForm from './components/order-forms/OrderForm';
import PasswordContainer from './components/password/PasswordContainer';

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

        <Route path="about" component={About} />
        <Route path="order-form" component={OrderForm} />
        <Route path="password-meter" component={PasswordContainer} />

      </Route>
    </Route>
  );
}
