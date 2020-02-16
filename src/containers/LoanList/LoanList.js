import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoanList from '../../components/LoanList';
import {
  selectors as loanSelectors,
  actions as loanActions,
} from '../../reducers/loans';
import {
  selectors as authSelectors,
} from '../../reducers/auth';

const mapStateToProps = (state) => ({
  loanList: loanSelectors.getLoanData(state),
  userRole: authSelectors.getUserRole(state),
})

const mapDispatchToProps = {
  loanRemove: loanActions.loanRemove,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoanList));
