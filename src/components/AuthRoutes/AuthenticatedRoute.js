import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({
  authenticated, component: Component, disallowed = [], userRole, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      const isAllowed = !disallowed.find(role => role === userRole);

      if (authenticated && isAllowed) {
        return <Component {...props} authenticated />;
      }

      if (!authenticated) {
        const toObj = {
          pathname: '/login',
          state: { from: props.location },
        };
        return <Redirect to={toObj} />;
      }

      if (!isAllowed) {
        const toObj = {
          pathname: '/',
        };
        return <Redirect to={toObj} />;
      }

      return <Redirect to="/error/404" />;
    }}
  />
);

AuthenticatedRoute.propTypes = {
  component: PropTypes.func,
  authenticated: PropTypes.bool,
  disallowed: PropTypes.arrayOf(PropTypes.any),
  location: PropTypes.any,
  userRole: PropTypes.string,
};

AuthenticatedRoute.defaultProps = {
  component: () => null,
  disallowed: [],
};

export default AuthenticatedRoute;
