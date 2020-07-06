import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../containers/LoginPage/LoginForm';
import {
  LoginPageWrap,
  LoginMessage,
  LoginItemWrap,
  LoginItem,
  LoginTitle,
} from './LoginPage.style';

class LoginPage extends Component {
  static propTypes = {
    statusMessage: PropTypes.string,
  }

  renderStatusMessage = () => {
    const { statusMessage } = this.props;
    return (
      <LoginMessage>{statusMessage}</LoginMessage>
    );
  }

  render() {
    return (
      <LoginPageWrap>
        {this.renderStatusMessage()}
        <LoginItemWrap>
          <LoginItem>
            <LoginTitle>
              <h1>Welcome to Aspire</h1>
            </LoginTitle>
           
            <LoginForm />
          </LoginItem>
        </LoginItemWrap>
      </LoginPageWrap>
    );
  }
}

export default LoginPage;