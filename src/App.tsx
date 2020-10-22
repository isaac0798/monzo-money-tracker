import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import MonzoAuthorizer from './components/monzoAuthorizer';
import MoneyTracker from './components/moneyTracker';
import './App.css';
import HomePage from './components/homeComponent';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <PrivateRoute path="/authorize">
            <MonzoAuthorizer />
          </PrivateRoute>
          <PrivateRoute path="/moneytracker">
            <MoneyTracker />
          </PrivateRoute>
        </Switch>
    </Router>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        JSON.parse(sessionStorage.getItem('isAuth') || 'false') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}