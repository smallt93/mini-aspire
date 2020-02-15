import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserRegister from '../../components/RegisterPage/UserRegister';
import {
  actions as authActions,
  selectors as authSelectors,
} from '../../reducers/auth';

const mapStateToProps = (state) => ({
  userData: authSelectors.getUserData(state),
});

const mapDispatchToProps = {
  userRegister: authActions.userRegister,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserRegister));