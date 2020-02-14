import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import LoginForm from '../../components/LoginPage/LoginForm';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));