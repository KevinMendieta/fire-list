import React from "react";
import { Route, Router, Switch } from "wouter";

import { PrivateRoute, PublicRoute } from ".";

// Public views
const LoginView = React.lazy(() => import("../views/Login"));
const SignupView = React.lazy(() => import("../views/Signup"));
const ForgotPasswordView = React.lazy(() => import("../views/ForgotPassword"));

// Private views
const HomeView = React.lazy(() => import("../views/Home"));

// Common views
const NotFound = React.lazy(() => import("../views/NotFound"));

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={LoginView} />
        <PublicRoute path="/signup" component={SignupView} />
        <PublicRoute path="/forgot-password" component={ForgotPasswordView} />
        <PrivateRoute path="/home" component={HomeView} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
