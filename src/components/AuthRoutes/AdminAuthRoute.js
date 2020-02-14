import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { ROLE_TYPE } from '../../utils/enums';

const AdminAuthRoute = ({
  role, authenticated,
  location,
  component: Component, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (role === ROLE_TYPE.ADMIN && authenticated) {
        return <Component {...props} location={location} />;
      }

      const toObj = {
        pathname: '/',
        state: { from: location },
      };

      return <Redirect to={toObj} />;
    }}
  />
);

AdminAuthRoute.propTypes = {
  component: PropTypes.func,
  role: PropTypes.string,
  location: PropTypes.any,
  authenticated: PropTypes.bool,
};

AdminAuthRoute.defaultProps = {
  role: null,
  authenticated: false,
  component: () => null,
};

export default AdminAuthRoute;
