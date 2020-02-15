import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminRegister from '../../components/RegisterPage/AdminRegister';
import { actions as authActions } from '../../reducers/auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  adminRegister: authActions.adminRegister,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminRegister));