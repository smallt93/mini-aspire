import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RepayComponent from '../../components/RepayComponent';
import {
  selectors as loanSelectors,
  actions as loanActions,
} from '../../reducers/loans';
import {
  selectors as authSelectors,
} from '../../reducers/auth';

const mapStateToProps = (state) => ({
  userRole: authSelectors.getUserRole(state),
  loanList: loanSelectors.getLoanData(state),
  loanSelectedId: loanSelectors.getLoanSelectedId(state),
  isRepaySuccess: loanSelectors.getRepaySuccess(state),
});

const mapDispatchToProps = {
  loanSelected: loanActions.loanSelected,
  loanRepay: loanActions.loanRepay,
  loanClearStatus: loanActions.loanClearStatus,
  saveHistoryLoanList: loanActions.saveHistoryLoanList,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RepayComponent));
