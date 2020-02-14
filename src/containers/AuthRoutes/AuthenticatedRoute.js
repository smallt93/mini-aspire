import { connect } from 'react-redux';
import AuthenticatedRoute from '../../components/AuthRoutes/AuthenticatedRoute';
import { selectors as AuthSelectors } from '../../reducers/auth';
import { selectors as UserSelectors } from '../../reducers/user';

const mapStateToProps = state => ({
  authenticated: AuthSelectors.getAuthenticatedStatus(state),
  userRole: UserSelectors.getUserRole(state),
});

export default connect(mapStateToProps)(AuthenticatedRoute);
