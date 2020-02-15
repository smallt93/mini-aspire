import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import LoginForm from '../../components/LoginPage/LoginForm';
import {
  actions as authActions
} from '../../reducers/auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  login: authActions.login,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));