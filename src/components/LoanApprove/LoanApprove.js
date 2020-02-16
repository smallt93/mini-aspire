import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { STATUS_TYPE } from '../../utils/enums';
import {
  LoanApproveWrap,
  LoanNoDataMessage,
  LoanApproveBlockWrap,
  LoanApproveItem,
  LoanApproveContent,
  LoanApproveAction,
  LoanButton,
} from './LoanApprove.style';

class LoanApprove extends Component {
  static propTypes = {
    loanDismissSubmit: PropTypes.func,
    loanApproveSubmit: PropTypes.func,
    loanList: PropTypes.array,
  }

  handleApproveSubmit = (id) => {
    const { loanApproveSubmit } = this.props;
    loanApproveSubmit(id);
  }

  handleDismissSubmit = (id) => {
    const { loanDismissSubmit } = this.props;
    loanDismissSubmit(id);
  }

  renderLoanListApprove = (values, index) => {
    const { country } = values;
    return (
      <LoanApproveBlockWrap key={index}>
        <LoanApproveItem>
          <LoanApproveContent>
            <span>Identification Number: </span>
            <div>{values.identificationNumber}</div>
          </LoanApproveContent>
          <LoanApproveContent>
            <span>Date of birth: </span>
            <div>{moment(values.dateOfBirth).format("YYYY/MM/DD")}</div>
          </LoanApproveContent>
          <LoanApproveContent>
            <span>Country: </span>
            <div>{country.value}</div>
          </LoanApproveContent>
          <LoanApproveContent>
            <span>Phone Number: </span>
            <div>{values.phoneNumber}</div>
          </LoanApproveContent>
          <LoanApproveContent redColor>
            <span>Amount: </span>
            <div>{`$${values.amount}`}</div>
          </LoanApproveContent>
          <LoanApproveContent>
            <span>Term: </span>
            <div>{moment(values.loanTerm).fromNow()}</div>
          </LoanApproveContent>
          <LoanApproveContent>
            <span>Loan Date: </span>
            <div>{moment(values.loanDate).format("YYYY/MM/DD h:mm a")}</div>
          </LoanApproveContent>
        </LoanApproveItem>

        <LoanApproveAction>
          <LoanButton onClick={() => this.handleApproveSubmit(values.id)}>
            Approve
          </LoanButton>
          <LoanButton dismiss onClick={() => this.handleDismissSubmit(values.id)}>
            Dismiss
          </LoanButton>
        </LoanApproveAction>
      </LoanApproveBlockWrap>
    )
  }

  renderNoDataMessage = () => (
    <LoanNoDataMessage>
      Empty Loan
    </LoanNoDataMessage>
  )

  render() {
    const { loanList } = this.props;
    const loanApprovedList = loanList.filter(l => l.status === STATUS_TYPE.PROCESS);
    if (loanApprovedList.length === 0) return (
      <LoanApproveWrap>
        {this.renderNoDataMessage()}
      </LoanApproveWrap>
    );
    
    return (
      <LoanApproveWrap>
        {loanApprovedList.map(this.renderLoanListApprove)}
      </LoanApproveWrap>
    );
  }
}

export default LoanApprove;