import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminRegister from '../../components/RegisterPage/AdminRegister';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminRegister));