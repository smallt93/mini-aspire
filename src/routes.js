import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLayout from './components/MainLayout';
import LoginPage from './containers/LoginPage';
import RegisterPage from './components/RegisterPage';
import LoanComponent from './components/LoanComponent';
import LoanApprove from './containers/LoanApprove';
import RepayComponent from './containers/RepayComponent';

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
            <AuthenticatedRoute exact path="/loans" component={LoanComponent} />
            <AuthenticatedRoute exact path="/loan-approves" component={LoanApprove} />
            <AuthenticatedRoute exact path="/repayments" component={RepayComponent} />
            <Redirect exact from="/" to="/loans" />
          </Switch>
        </MainLayout>
      </Switch>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Router);
