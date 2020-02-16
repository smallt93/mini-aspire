import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import moment from 'moment';
import * as Yup from 'yup';
import FormInput from '../FormInput/FormInput';
import { countryData } from './CountryData';
import {
  LoansWrap,
  LoansItem,
  SubmitAction,
  SubmitButton,
  LoanMessage,
} from './LoanForm.style';

const validationSchema = Yup.object().shape({
  identificationNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
    .trim()
    .required('Personal Identification number is required'),
  dateOfBirth: Yup.string().trim().required('Date of birth is required'),
  country: Yup.string().trim().required('The country is required'),
  phoneNumber: Yup.string().trim().required('The phone number is Required'),
  amount: Yup.string().trim().required('The amount is required'),
  loanTerm: Yup.string().trim().required('The loan term is required'),
});

const initialValues = {
  identificationNumber: '',
  dateOfBirth: '',
  country: '',
  phoneNumber: '',
  amount: '',
  loanTerm: '',
};

class LoanForm extends Component {
  componentDidMount = () => {
    const { loanClearStatus } = this.props;
    loanClearStatus();
  }

  loanSubmit = (values) => {
    const { loanSubmit } = this.props;
    const { loanTerm, amount } = values;
    const loanDate = new Date();
    const dayOfMonth = moment(loanTerm).diff(loanDate, 'days');
    const weekOfMonths = Math.ceil(dayOfMonth / 7);
    const payPerWeek = Math.round(amount / weekOfMonths);

    const loanValues = {
      ...values,
      id: Math.floor(Math.random() * 100),
      status: 'process',
      loanDate,
      payPerWeek,
    }
    loanSubmit(loanValues);
  }

  renderSubmitBtn = () => {
    const { isLoading } = this.props;
    return (
      isLoading
        ? <SubmitButton>Loading ...</SubmitButton>
        : <SubmitButton type="submit">Submit</SubmitButton>
    );
  }

  renderLoanForm = () => (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={this.loanSubmit}
    >
      <Form>
        <FormInput
          type="text"
          name="identificationNumber"
          label="Personal Identification Number"
        />
        <FormInput
          type="date"
          name="dateOfBirth"
          label="Date Of Birth"
        />
        <FormInput
          type="select"
          name="country"
          label="Country"
          options={countryData}
        />
        <FormInput
          type="number"
          name="phoneNumber"
          label="Phone Number"
        />
        <FormInput
          type="number"
          name="amount"
          label="Amount (USD Only)"
        />
        <FormInput
          type="date"
          name="loanTerm"
          label="Loan Term"
          minDate={new Date()}
        />
        <SubmitAction>
          {this.renderSubmitBtn()}
        </SubmitAction>
      </Form>
    </Formik>
  )

  renderLoanMessage = () => (
    <LoanMessage>
      Your loan has been submitted successfully.
      <br />
      <br />
      Thank you and wait for your loan to get officially approved
      
    </LoanMessage>
  )

  render() {
    const { isLoanSuccess } = this.props;
    return (
      <LoansWrap>
        <LoansItem>
          {isLoanSuccess
            ? this.renderLoanMessage()
            : this.renderLoanForm()
          }
        </LoansItem>
      </LoansWrap>
    );
  }
}

export default LoanForm;