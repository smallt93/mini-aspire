import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { ROLE_TYPE } from '../../utils/enums';

const TeacherUnauthRoute = ({
  role, authenticated, currentStep,
  location, component: Component, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!authenticated) {
        return <Component {...props} />;
      }

      let toObj = {
        pathname: '/',
        state: { from: location },
      };

      if (role === ROLE_TYPE.INSTRUCTOR) {
        toObj = {
          pathname: `/register/teacher/${currentStep + 1}`,
          state: { from: location },
        };
      }

      return <Redirect to={toObj} />;
    }}
  />
);

TeacherUnauthRoute.propTypes = {
  component: PropTypes.func,
  role: PropTypes.string,
  location: PropTypes.any,
  authenticated: PropTypes.bool,
  currentStep: PropTypes.number.isRequired,
};

TeacherUnauthRoute.defaultProps = {
  role: null,
  authenticated: false,
  component: () => null,
};

export default TeacherUnauthRoute;
