import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserRegister from '../../components/RegisterPage/UserRegister';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserRegister));