import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Select from 'react-select';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import RepayHistory from '../../containers/RepayHistory';
import { STATUS_TYPE, ROLE_TYPE } from '../../utils/enums';
import {
  LoanContainerWrap
} from '../LoanComponent/LoanComponent.style';
import {
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
  RepaymentWrap,
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
    saveHistoryLoanList: PropTypes.func,
    userRole: PropTypes.string,
  }

  togglePopup = () => {
    this.setState(prevState => ({
      isPopupOpen: !prevState.isPopupOpen,
    }));
  };

  handleRepay = (loanItem) => {
    const { loanRepay, loanSelectedId, saveHistoryLoanList } = this.props;
    const historyLoanItem = { 
      ...loanItem,
      repaidDate: moment(new Date()),
    };
    loanRepay(loanSelectedId);
    saveHistoryLoanList(historyLoanItem);

    this.setState({
      isPopupOpen: false,
    })
  }

  renderConfirmPopup = (loanItem) => (
    <LoanConfirmPopupWrap>
      <LoanConfirmContent>
        Do you want repay this loan ?
      </LoanConfirmContent>
      <LoanConfirmAction>
        <LoanButton onClick={() => this.handleRepay(loanItem)}>Submit</LoanButton>
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
    const { userRole } = this.props;
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
          {userRole === ROLE_TYPE.USER && (
            <LoanButton onClick={this.togglePopup}>
              Repay
            </LoanButton>
          )}
        </LoanApproveAction>
        {isPopupOpen && (
          <>
            <OverlayWrap overlay onClick={this.togglePopup} />
            {this.renderConfirmPopup(loanItem)}
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

  renderSelectLoan = () => {
    const { loanList, loanSelectedId, isRepaySuccess } = this.props;
    const loanApprovedList = loanList.filter(l => l.status === STATUS_TYPE.APPROVED);
    const loanSelected = loanApprovedList.find(l => l.id === loanSelectedId);
    return (
      <RepaymentWrap>
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
      </RepaymentWrap>
    )
  }

  render() {
    const { loanClearStatus } = this.props;
    return (
      <LoanContainerWrap>
        <Tabs>
          <TabList>
            <Tab onClick={loanClearStatus}>Repayments</Tab>
            <Tab>History</Tab>
          </TabList>

          <TabPanel>
            {this.renderSelectLoan()}
          </TabPanel>
          <TabPanel>
            <RepayHistory />
          </TabPanel>
        </Tabs>
      </LoanContainerWrap>
    );
  }
}

export default LoanApprove;