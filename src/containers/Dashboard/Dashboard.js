import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import Dashboard from '../../components/Dashboard';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
