import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLayout from './components/MainLayout';
import LoginPage from './containers/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './containers/Dashboard';

import {
  AuthenticatedRoute,
  UnauthenticatedRoute,
} from './containers/AuthRoutes';

class Router extends React.Component {
  static propTypes = {}

  render() {
    return (
      <Switch>
        <UnauthenticatedRoute exact path="/login" component={LoginPage} />
        <UnauthenticatedRoute exact path="/register" component={RegisterPage} />

        <MainLayout>
          <Switch>
            <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
            <Redirect exact from="/" to="/dashboard" />
          </Switch>
        </MainLayout>
      </Switch>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Router);
