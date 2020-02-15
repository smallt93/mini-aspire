import { connect } from 'react-redux';
import UnauthenticateRoute from '../../components/AuthRoutes/UnauthenticateRoute';
import { selectors as AuthSelectors } from '../../reducers/auth';

const mapStateToProps = state => ({
  authenticated: AuthSelectors.getAuthenticatedStatus(state),
});

export default connect(mapStateToProps)(UnauthenticateRoute);
