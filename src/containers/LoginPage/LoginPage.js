import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginPage from '../../components/LoginPage';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));