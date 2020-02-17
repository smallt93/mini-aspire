import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoanForm from '../../components/LoanForm';
import { 
  actions as loanActions,
  selectors as loanSelectors,
} from '../../reducers/loans';
import {
  selectors as authSelectors
} from '../../reducers/auth';

const mapStateToProps = (state) => ({
  isLoanSuccess: loanSelectors.getLoanSuccess(state),
  userRole: authSelectors.getUserRole(state),
  userData: authSelectors.getUserData(state),
  adminData: authSelectors.getAdminData(state),
});

const mapDispatchToProps = {
  loanSubmit: loanActions.loanSubmit,
  loanClearStatus: loanActions.loanClearStatus,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoanForm));
