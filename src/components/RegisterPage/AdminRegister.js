import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from '../FormInput/FormInput';
import {
  LoginItemWrap,
  LoginItem,
  LoginTitle,
  LoginButton,
} from '../LoginPage/LoginPage.style';

const validationSchema = Yup.object().shape({
  userName: Yup.string().trim().required('Required'),
  email: Yup.string().email('Invalid Email').trim().required('Required'),
  password: Yup.string().trim()
    .notOneOf(['123456', 123456], 'Your password is too simple')
    .min(8, 'The password is greater than 8 characters')
    .matches(/[0-9]/, 'The password contains at least one number')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Your password and confirm password is not match')
    .required('Required'),
});


const initialValues = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default class AdminRegister extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool,
    adminRegister: PropTypes.func.isRequired,
  }

  adminRegisterSubmit = (values) => {
    const { adminRegister } = this.props;
    const adminValue = { 
      ...values,
      role: 'admin'
    };
    adminRegister(adminValue);
  }

  renderLoginBtn = () => {
    const { isLoading } = this.props;
    return (
      isLoading
        ? <LoginButton primary>Loading ...</LoginButton>
        : <LoginButton type="submit">Create account</LoginButton>
    );
  }

  render() {
    return (
      <LoginItemWrap noFlex>
        <LoginItem>
          <LoginTitle>
            <h1>Admin Register</h1>
          </LoginTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={this.adminRegisterSubmit}
          >
            <Form>
              <FormInput
                type="text"
                name="userName"
                label="User Name"
              />
              <FormInput
                type="email"
                name="email"
                label="Email"
              />
              <FormInput
                type="password"
                name="password"
                label="Password"
                showPassword
              />
              <FormInput
                type="password"
                name="confirmPassword"
                label="Confirm password"
              />
              {this.renderLoginBtn()}
              <Link to="/login">
                <LoginButton register>Back to login</LoginButton>
              </Link>
            </Form>
          </Formik>
        </LoginItem>
      </LoginItemWrap>
    );
  }
}
