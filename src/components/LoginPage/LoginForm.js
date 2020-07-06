import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from '../FormInput/FormInput';
import { LoginButton } from './LoginPage.style';

const validationSchema = Yup.object().shape({
  email: Yup.string().trim().required('Invalid email'),
  password: Yup.string().trim()
    .required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

export default class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    login: PropTypes.func,
    isLoading: PropTypes.bool,
    errorMessage: PropTypes.any,
  }

  loginSubmit = (loginValues) => {
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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.loginSubmit}
      >
        <Form noValidate>
          <FormInput
            type="email"
            name="email"
            label="Email"
          />
          <FormInput
            type='password'
            name="password"
            label="Password"
          />
          {this.renderLoginBtn()}
          
          <Link to="/register">
            <LoginButton register>Register</LoginButton>
          </Link>
        </Form>
      </Formik>
    );
  }
}
