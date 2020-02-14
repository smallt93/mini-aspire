import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from '../FormInput/FormInput';
import {
  LoginItemWrap,
  LoginItem,
  LoginTitle,
  LoginButton,
} from './LoginPage.style';

const validationSchema = Yup.object().shape({
  email: Yup.string().trim().required('Invalid email'),
  password: Yup.string().trim()
    .required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

export default class StudentLoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    errorMessage: PropTypes.any,
  }

  login = (loginValues) => {
    const { login } = this.props;
    login(loginValues);
  }

  renderLoginBtn = () => {
    const { isLoading } = this.props;
    return (
      isLoading
        ? <LoginButton primary>Loading ...</LoginButton>
        : <LoginButton type="submit">Login</LoginButton>
    );
  }

  render() {
    return (
      <LoginItemWrap>
        <LoginItem>
          <LoginTitle>
            <h1>Welcome to Aspire</h1>
          </LoginTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={this.login}
          >
            <Form noValidate>
              <FormInput
                type="email"
                name="email"
                label="Email or Username"
              />
              <FormInput
                type={'password'}
                name="password"
                label="Password"
              />
              {this.renderLoginBtn()}
            </Form>
          </Formik>

          <Link to="/register">
            <LoginButton register>Register</LoginButton>
          </Link>
        </LoginItem>
      </LoginItemWrap>
    );
  }
}
