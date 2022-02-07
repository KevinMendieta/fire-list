import React from "react";
import { Router, Switch, Route } from "wouter";

import { PrivateRoute } from ".";

const LoginView = React.lazy(() => import("../views/Login"));
const SignupView = React.lazy(() => import("../views/Signup"));

const HomeView = React.lazy(() => import("../views/Home"));

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SignupView} />
        <PrivateRoute path="/home" component={HomeView} />
      </Switch>
    </Router>
  );
}
