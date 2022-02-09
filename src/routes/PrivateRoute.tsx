import React from "react";
import {
  Route,
  Redirect,
  RouteComponentProps,
  DefaultParams,
  useLocation,
} from "wouter";

import { useAuth } from "../hooks";

interface PrivateRouteProps {
  component: React.ComponentType<RouteComponentProps<DefaultParams>>;
  path: string;
}

export default function PrivateRoute(props: PrivateRouteProps) {
  const { component: Component, path } = props;

  const [location] = useLocation();
  const { currentUser } = useAuth();
  return (
    <Route path={path}>
      {(params) =>
        currentUser ? (
          <Component params={params} />
        ) : (
          <Redirect to={`/login?redirectTo=${location}`} />
        )
      }
    </Route>
  );
}
