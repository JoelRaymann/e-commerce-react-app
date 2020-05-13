import React from "react";
import "./login-register.styles.scss";

// Import components here
import SignIn from "../../components/sign-in/sign-in.component";

const LoginRegister = () => {
  return (
    <div className="login-register">
      <SignIn />
    </div>
  );
};

export default LoginRegister;
