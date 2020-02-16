import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoanApprove from '../../components/LoanApprove';
import {
  selectors as loanSelectors,
  actions as loanActions,
} from '../../reducers/loans';

const mapStateToProps = (state) => ({
  loanList: loanSelectors.getLoanData(state),
})

const mapDispatchToProps = {
  loanApproveSubmit: loanActions.loanApproveSubmit,
  loanDismissSubmit: loanActions.loanDismissSubmit,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoanApprove));
