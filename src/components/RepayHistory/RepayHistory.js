import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  TableContentItem,
  TableHeadWrapper,
  TableContentWrapper,
} from '../Table/TableComponent.style';
import { ColumnSize } from './ColumnSize';
import { TableContent, TableHeader } from '../Table/TableComponent';
import {
  LoanListWrap,
  LoanNoDataMessage,
} from './RepayHistory.style';

class RepayHistory extends Component {
  static propTypes = {
    repaidHistoryList: PropTypes.array,
  }

  handleLoanRemove = (loanId) => {
    const { loanRemove } = this.props;
    loanRemove(loanId);
  }

  renderLoanHeader = () => (
    <TableHeadWrapper>
      <TableHeader {...ColumnSize[0]} />
      <TableHeader {...ColumnSize[1]} value="Identification Number" />
      <TableHeader {...ColumnSize[2]} value="Amount" />
      <TableHeader {...ColumnSize[3]} value="Repaid" />
      <TableHeader {...ColumnSize[4]} value="Weekly repayment " />
      <TableHeader {...ColumnSize[5]} value="Term" />
      <TableHeader {...ColumnSize[6]} value="Loan Date" />
      <TableHeader {...ColumnSize[7]} value="Repaid Date" />
    </TableHeadWrapper>
  )

  renderRepayHistoryItem = (values, index) => {
    return (
      <TableContentItem key={index}>
        <TableContent {...ColumnSize[0]}>{index + 1}</TableContent>
        <TableContent {...ColumnSize[1]}>{values.identificationNumber}</TableContent>
        <TableContent {...ColumnSize[2]}>{`$${values.amount.toLocaleString('en-GB')}`}</TableContent>
        <TableContent {...ColumnSize[3]}>{`$${values.repaid.toLocaleString('en-GB')}`}</TableContent>
        <TableContent {...ColumnSize[4]}>{`$${values.payPerWeek.toLocaleString('en-GB')}`}</TableContent>
        <TableContent {...ColumnSize[5]}>{moment(values.loanTerm).fromNow()}</TableContent>
        <TableContent {...ColumnSize[6]}>{moment(values.loanDate).format("YYYY/MM/DD h:mm a")}</TableContent>
        <TableContent {...ColumnSize[7]}>{moment(values.repaidDate).format("YYYY/MM/DD h:mm a")}</TableContent>
      </TableContentItem>
    )
  }

  render() {
    const { repaidHistoryList } = this.props;
    return (
      <LoanListWrap>
        {this.renderLoanHeader()}
        <TableContentWrapper>
          {repaidHistoryList.length > 0
            ? repaidHistoryList.map(this.renderRepayHistoryItem)
            : (
              <LoanNoDataMessage>
                Empty repaid
              </LoanNoDataMessage>
            )
          }
        </TableContentWrapper>
      </LoanListWrap>
    );
  }
}

export default RepayHistory;