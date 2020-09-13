import React from "react";
import { Route, Redirect } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Fab from "@material-ui/core/Fab";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

interface Props {
  exact: boolean;
  path: string;
  isAdminRoute?: boolean;
  Component: React.ComponentType<any>;
}

const AuthenticatedRoute: React.FC<Props> = ({ path, Component }) => {
  const loggedInUser = localStorage.loggedInUser && JSON.parse(localStorage.loggedInUser);

  return (
    <Route path={path} render={() => loggedInUser ?
      <>
        <Navbar />
        <Component />
        <Fab aria-label="add" className="floating-button">
          <OpenInNewIcon />
        </Fab>
      </>
      : <Redirect to="/login" />} />
  );
};

export default AuthenticatedRoute;