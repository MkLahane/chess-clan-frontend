import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { getAuthToken } from "../contexts/AuthToken";

const AuthRoute = ({ component: Component, inverse, ...rest }) => {
  const isUserLoggedIn = getAuthToken() === "" ? false : true;
  if (inverse) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isUserLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  } else {
    return (
      <Route
        {...rest}
        render={(props) =>
          isUserLoggedIn ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    );
  }
};

export default AuthRoute;
