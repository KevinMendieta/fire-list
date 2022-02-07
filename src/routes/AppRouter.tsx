import React from "react";
import { Router, Switch } from "wouter";

import { PrivateRoute, PublicRoute } from ".";

const LoginView = React.lazy(() => import("../views/Login"));
const SignupView = React.lazy(() => import("../views/Signup"));

const HomeView = React.lazy(() => import("../views/Home"));

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={LoginView} />
        <PublicRoute path="/signup" component={SignupView} />
        <PrivateRoute path="/home" component={HomeView} />
      </Switch>
    </Router>
  );
}
