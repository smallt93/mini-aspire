import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoanForm from '../../components/LoanForm';
import { 
  actions as loanActions,
  selectors as loanSelectors,
} from '../../reducers/loans';

const mapStateToProps = (state) => ({
  isLoanSuccess: loanSelectors.getLoanSuccess(state),
});

const mapDispatchToProps = {
  loanSubmit: loanActions.loanSubmit,
  loanClearStatus: loanActions.loanClearStatus,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoanForm));
