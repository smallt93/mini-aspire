import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default class UnauthenticateRoute extends React.Component {
  render() {
    const {
      authenticated,
      component: Component, ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!authenticated) {
            return <Component {...props} authenticated />;
          }

          return <Redirect to='/' />;
        }}
      />
    );
  }
}

UnauthenticateRoute.propTypes = {
  authenticated: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.any,
};

UnauthenticateRoute.defaultProps = {
  component: () => null,
};
