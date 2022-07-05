import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Dashboard } from "../components/dashboard/dashboard";
import { Login } from "../components/login/login";
import { useIsAuthenticated } from "../hooks/useIsAuthenticated";

const PrivateRoute = (props: any) => {
  const authenticated = useIsAuthenticated();
  return authenticated ? <Route {...props} /> : <Redirect to="/login" />;
};

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/" component={Login} />
    </Switch>
  );
};
