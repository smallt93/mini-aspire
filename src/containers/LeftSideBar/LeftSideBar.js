import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LeftSideBar from '../../components/LeftSideBar';
import {
  selectors as authSelectors
} from '../../reducers/auth';

const mapStateToProps = (state) => ({
  userRole: authSelectors.getUserRole(state),
})

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftSideBar));
