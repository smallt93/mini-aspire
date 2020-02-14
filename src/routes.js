import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLayout from './components/MainLayout';
import LoginPage from './containers/LoginPage';
import RegisterPage from './components/RegisterPage';

import {
  AuthenticatedRoute,
  UnauthenticatedRoute,
  TeacherAuthRoute,
} from './containers/AuthRoutes';

class Router extends React.Component {
  static propTypes = {}

  render() {
    return (
      <Switch>
        <UnauthenticatedRoute exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />

        <MainLayout>
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
          </Switch>
        </MainLayout>
      </Switch>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Router);
