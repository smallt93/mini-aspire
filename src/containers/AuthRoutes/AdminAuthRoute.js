import { connect } from 'react-redux';
import AdminAuthRoute from '../../components/AuthRoutes/AdminAuthRoute';
import { selectors as AuthSelectors } from '../../reducers/auth';
import { selectors as UserSelectors } from '../../reducers/user';

const mapStateToProps = (state) => ({
  authenticated: AuthSelectors.getAuthenticatedStatus(state),
  role: UserSelectors.getUserRole(state),
});

export default connect(mapStateToProps)(AdminAuthRoute);
