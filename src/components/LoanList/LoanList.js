import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { STATUS_TYPE } from '../../utils/enums';
import {
  TableContentItem,
  TableHeadWrapper,
  TableContentWrapper,
} from '../Table/TableComponent.style';
import { ColumnSize } from './ColumnSize';
import { TableContent, TableHeader } from '../Table/TableComponent';
import {
  LoanListWrap,
  LoanAction,
  LoanButton,
  LoanNoDataMessage,
} from './LoanList.style';

class LoanList extends Component {
  static propTypes = {
    loanRemove: PropTypes.func,
    loanList: PropTypes.array,
  }

  handleLoanRemove = (loanId) => {
    const { loanRemove } = this.props;
    loanRemove(loanId);
  }

  renderActionButtons = (loanId) => (
    <LoanAction>
      <LoanButton onClick={() => this.handleLoanRemove(loanId)}>
        x
      </LoanButton>
    </LoanAction>
  );

  renderLoanHeader = () => (
    <TableHeadWrapper>
      <TableHeader {...ColumnSize[0]} />
      <TableHeader {...ColumnSize[1]} value="Identification Number" />
      <TableHeader {...ColumnSize[2]} value="Amount" />
      <TableHeader {...ColumnSize[3]} value="Term" />
      <TableHeader {...ColumnSize[4]} value="Loan Date" />
      <TableHeader {...ColumnSize[5]} value="Status" />
      <TableHeader {...ColumnSize[6]} value="Action" />
    </TableHeadWrapper>
  )

  renderLoanContent = (values, index) => {
    return (
      <TableContentItem
        key={index}
      >
        <TableContent {...ColumnSize[0]}>{index + 1}</TableContent>
        <TableContent {...ColumnSize[1]}>{values.identificationNumber}</TableContent>
        <TableContent {...ColumnSize[2]}>{`$${values.amount.toLocaleString('en-GB')}`}</TableContent>
        <TableContent {...ColumnSize[3]}>{moment(values.loanTerm).fromNow()}</TableContent>
        <TableContent {...ColumnSize[4]}>{moment(values.loanDate).format("YYYY/MM/DD h:mm a")}</TableContent>
        <TableContent
          {...ColumnSize[5]}
          approved={values.status === STATUS_TYPE.APPROVED}
          dismiss={values.status === STATUS_TYPE.DISMISS}
        >
          {values.status}
        </TableContent>
        <TableContent {...ColumnSize[6]} actionType>
          {this.renderActionButtons(values.id)}
        </TableContent>
      </TableContentItem>
    )
  }

  render() {
    const { loanList } = this.props;
    return (
      <LoanListWrap>
        {this.renderLoanHeader()}
        <TableContentWrapper>
          {loanList.length > 0
            ? loanList.map(this.renderLoanContent)
            : (
              <LoanNoDataMessage>
                Empty Loan
              </LoanNoDataMessage>
            )
          }
        </TableContentWrapper>
      </LoanListWrap>
    );
  }
}

export default LoanList;