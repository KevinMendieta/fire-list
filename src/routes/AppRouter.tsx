import React from "react";
import { Router, Switch, Route } from "wouter";

const LoginView = React.lazy(() => import("../views/Login"));
const SignupView = React.lazy(() => import("../views/Signup"));

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SignupView} />
      </Switch>
    </Router>
  );
}
