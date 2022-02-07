import React from "react";
import { Route, Redirect, RouteComponentProps, DefaultParams } from "wouter";

import { useAuth } from "../hooks";

interface PublicRouteProps {
  component: React.ComponentType<RouteComponentProps<DefaultParams>>;
  path: string;
}

export default function PublicRoute(props: PublicRouteProps) {
  const { component: Component, path } = props;

  const { currentUser } = useAuth();
  return (
    <Route path={path}>
      {(params) =>
        !currentUser ? <Component params={params} /> : <Redirect to="/home" />
      }
    </Route>
  );
}
