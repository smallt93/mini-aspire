import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoanList from '../../components/LoanList';
import {
  selectors as loanSelectors,
  actions as loanActions,
} from '../../reducers/loans';

const mapStateToProps = (state) => ({
  loanList: loanSelectors.getLoanData(state),
})

const mapDispatchToProps = {
  loanRemove: loanActions.loanRemove,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoanList));
