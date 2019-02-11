import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log()  
        if (!auth.getCurrentUser()) return ( <Redirect to={{pathname: '/login', state: {from: props.location}
      }} /> );
        return Component ? <Component {...props} /> : render();
      }}
    />
  );
};

export default ProtectedRoute;
