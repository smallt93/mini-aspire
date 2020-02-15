import React, { Component } from 'react';
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
  LoanAction,
  LoanButton,
} from './LoanList.style';

class LoanList extends Component {
  renderActionButtons = () => (
    <LoanAction>
      <LoanButton>
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
        <TableContent {...ColumnSize[2]}>{`$${values.amount}`}</TableContent>
        <TableContent {...ColumnSize[3]}>{moment(values.loanTerm).fromNow()}</TableContent>
        <TableContent {...ColumnSize[4]}>{moment(values.loanDate).format("YYYY/MM/DD h:mm a")}</TableContent>
        <TableContent {...ColumnSize[5]}>{values.status}</TableContent>
        <TableContent {...ColumnSize[6]}>
          {this.renderActionButtons()}
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
          {loanList.map(this.renderLoanContent)}
        </TableContentWrapper>
      </LoanListWrap>
    );
  }
}

export default LoanList;