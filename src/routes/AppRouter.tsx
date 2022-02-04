import React from "react";
import { Router, Switch, Route } from "wouter";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login" />
        <Route path="/signup" />
      </Switch>
    </Router>
  );
}
