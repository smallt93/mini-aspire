import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RepayHistory from '../../components/RepayHistory';
import {
  selectors as loanSelectors,
} from '../../reducers/loans';

const mapStateToProps = (state) => ({
  repaidHistoryList: loanSelectors.getRepaidHistoryList(state),
})

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RepayHistory));
