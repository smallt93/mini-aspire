import { connect } from 'react-redux';
import AuthenticatedRoute from '../../components/AuthRoutes/AuthenticatedRoute';
import { selectors as AuthSelectors } from '../../reducers/auth';

const mapStateToProps = state => ({
  authenticated: AuthSelectors.getAuthenticatedStatus(state),
});

export default connect(mapStateToProps)(AuthenticatedRoute);
