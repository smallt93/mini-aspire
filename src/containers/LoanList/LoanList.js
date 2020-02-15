import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoanList from '../../components/LoanList';
import {
  selectors as loanSelectors,
} from '../../reducers/loans';

const mapStateToProps = (state) => ({
  loanList: loanSelectors.getLoadData(state),
})

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoanList));
