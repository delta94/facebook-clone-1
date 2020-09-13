import React from "react";
import { Container } from "@material-ui/core";
import { Switch, withRouter, useLocation } from "react-router-dom";
import Login from "../components/Login/Login";
import Feed from "../components/Feed/Feed";
import AuthenticatedRoute from "./Routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./Routes/UnauthenticatedRoute";
import DefaultRoute from "./Routes/DefaultRoute";

const AppRouter: React.FC = () => {
  const location = useLocation();

  const containerStyles = () => {
    return {
      margin: location.pathname !== "/login" ? "85px 0 0 0" : "",
      maxWidth: "100vw"
    };
  };

  return (
    <Container style={containerStyles()}>
      <Switch>
        <UnauthenticatedRoute exact path="/login" Component={Login} />
        <AuthenticatedRoute exact path="/feed" Component={Feed} />
        <AuthenticatedRoute exact path="/" Component={Feed} />
        <DefaultRoute Component={Feed} />
      </Switch>
    </Container>
  );
};

export default withRouter(AppRouter);