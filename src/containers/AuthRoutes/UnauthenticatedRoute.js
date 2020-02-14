import { connect } from 'react-redux';
import UnauthenticateRoute from '../../components/AuthRoutes/UnauthenticateRoute';
import { selectors as AuthSelectors } from '../../reducers/auth';
import { selectors as UserSelectors } from '../../reducers/user';

const mapStateToProps = state => ({
  authenticated: AuthSelectors.getAuthenticatedStatus(state),
  role: UserSelectors.getUserRole(state),
});

export default connect(mapStateToProps)(UnauthenticateRoute);
