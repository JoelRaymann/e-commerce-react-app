import React from "react";
import "./login-register.styles.scss";

// Import components here
import SignIn from "../../components/sign-in/sign-in.component";
import Register from "../../components/register/register.component";

const LoginRegister = () => {
  return (
    <div className="login-register">
      <SignIn />
      <Register />
    </div>
  );
};

export default LoginRegister;
