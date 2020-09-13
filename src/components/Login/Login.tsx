
import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";
import FacebookLogo from "../../images/FacebookLogo.webp";
import FacebookTitle from "../../images/FacebookTitle.svg";
import "./Login.scss";

const Login = () => {
  const history = useHistory();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        localStorage.loggedInUser = JSON.stringify(result.user);
        history.push("/feed");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="login-container">
      <div className="images">
        <img src={FacebookLogo} alt="facebook-logo" height="150" />
        <img src={FacebookTitle} alt="facebook-title" height="150" />
      </div>
      <Button type="button" fullWidth variant="contained" onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;