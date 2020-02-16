import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Select from 'react-select';
import { STATUS_TYPE } from '../../utils/enums';
import {
  LoanApproveWrap,
  LoanNoDataMessage,
  LoanApproveBlockWrap,
  LoanApproveItem,
  LoanApproveContent,
  LoanApproveAction,
  LoanButton,
  LoanConfirmPopupWrap,
  LoanConfirmContent,
  LoanConfirmAction,
  OverlayWrap,
  LoanRepayMessage,
} from '../LoanApprove/LoanApprove.style';

class LoanApprove extends Component {
  componentDidMount = () => {
    const { loanClearStatus } = this.props;
    loanClearStatus();    
  }

  state = {
    isPopupOpen: false,
  }

  static propTypes = {
    loanRepay: PropTypes.func,
    loanList: PropTypes.array,
    history: PropTypes.any,
    loanSelectedId: PropTypes.any,
  }

  togglePopup = () => {
    this.setState(prevState => ({
      isPopupOpen: !prevState.isPopupOpen,
    }));
  };

  handleRepay = () => {
    const { loanRepay, loanSelectedId } = this.props;
    loanRepay(loanSelectedId);

    this.setState({
      isPopupOpen: false,
    })
  }

  renderConfirmPopup = () => (
    <LoanConfirmPopupWrap>
      <LoanConfirmContent>
        Do you want repay this loan ?
      </LoanConfirmContent>
      <LoanConfirmAction>
        <LoanButton onClick={this.handleRepay}>Submit</LoanButton>
        <LoanButton dismiss onClick={this.togglePopup}>Cancel</LoanButton>
      </LoanConfirmAction>
    </LoanConfirmPopupWrap>
  )

  renderLoanListApprove = (loanItem) => {
    const {
      country, amount, loanTerm,
      loanDate, phoneNumber, dateOfBirth,
      identificationNumber,
    } = loanItem;
    const { isPopupOpen } = this.state;

    return (
      <LoanApproveBlockWrap>
        <LoanApproveItem>
          <LoanApproveContent>
            <span>Identification Number: </span>
            <div>{identificationNumber}</div>
          </LoanApproveContent>
          <LoanApproveContent>
            <span>Date of birth: </span>
            <div>{moment(dateOfBirth).format("YYYY/MM/DD")}</div>
          </LoanApproveContent>
          <LoanApproveContent>
            <span>Country: </span>
            <div>{country.value}</div>
          </LoanApproveContent>
          <LoanApproveContent>
            <span>Phone Number: </span>
            <div>{phoneNumber}</div>
          </LoanApproveContent>
          <LoanApproveContent redColor>
            <span>Amount: </span>
            <div>{`$${amount.toLocaleString('en-GB')}`}</div>
          </LoanApproveContent>
          <LoanApproveContent>
            <span>Term: </span>
            <div>{moment(loanTerm).fromNow()}</div>
          </LoanApproveContent>
          <LoanApproveContent>
            <span>Loan Date: </span>
            <div>{moment(loanDate).format("YYYY/MM/DD h:mm a")}</div>
          </LoanApproveContent>
        </LoanApproveItem>

        <LoanApproveAction>
          <LoanButton onClick={this.togglePopup}>
            Repay
          </LoanButton>
        </LoanApproveAction>
        {isPopupOpen && (
          <>
            <OverlayWrap overlay onClick={this.togglePopup} />
            {this.renderConfirmPopup()}
          </>
        )}

      </LoanApproveBlockWrap>
    )
  }

  renderNoDataMessage = () => (
    <LoanNoDataMessage>
      Please select loan to repay
    </LoanNoDataMessage>
  )

  selectLoanId = (loanValue) => {
    const { loanSelected } = this.props;
    const { id } = loanValue;
    loanSelected(id);
  }

  render() {
    const { loanList, loanSelectedId, isRepaySuccess } = this.props;
    console.log("TCL: isRepaySuccess", isRepaySuccess)
    const loanApprovedList = loanList.filter(l => l.status === STATUS_TYPE.APPROVED);
    const loanSelected = loanApprovedList.find(l => l.id === loanSelectedId);
    return (
      <LoanApproveWrap>
        <Select
          onChange={this.selectLoanId}
          className="loan-select-container"
          classNamePrefix="loan-select"
          placeholder="Select a loan to repay"
          options={loanApprovedList}
          getOptionLabel={option => `$${option.amount} - ${moment(option.loanDate).format("YYYY/MM/DD h:mm a")}`}
          getOptionValue={option => `$${option.amount} - ${moment(option.loanDate).format("YYYY/MM/DD h:mm a")}`}
        />
        {isRepaySuccess && <LoanRepayMessage>Your loans is repaid successfully</LoanRepayMessage>}
        {loanSelected && this.renderLoanListApprove(loanSelected)}
      </LoanApproveWrap>
    );
  }
}

export default LoanApprove;