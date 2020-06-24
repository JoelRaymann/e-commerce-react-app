import React, { useState } from "react";
import { connect } from "react-redux";
import "./register.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import redux utils
import { registerUserStart } from "../../redux/user/user.actions";

/**
 * Functional React component to render a register form and handle
 * all registration process.
 *
 * @param {React.Props} props - The properties of Register component.
 * Currently takes no props.
 */
const Register = (props) => {
  // get props
  const { registerUserStart } = props;

  // Define the states here
  const [registerCredentials, setRegisterCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // get the state props
  const { displayName, email, password, confirmPassword } = registerCredentials;

  // NOTE: in-house Functions here
  /**
   * Function to handle the changes in the form inputs
   *
   * @param {React.SyntheticEvent} event - The onChange() synthetic event
   */
  function handleChange(event) {
    const { name, value } = event.target;

    setRegisterCredentials({
      ...registerCredentials,
      [name]: value,
    });
  }

  /**
   * Function to handle the submission of the register form
   *
   * @param {React.SyntheticEvent} event - The onSubmit() synthetic event
   */
  function handleSubmit(event) {
    // disable inate reloading behaviour of onSubmit()
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    registerUserStart(email, password, { displayName });
  }

  // Render
  return (
    <div className="register-container">
      <h2 className="title">Don't have an account?</h2>
      <span className="subtitle">Sign up with your email and password</span>

      <form onSubmit={handleSubmit} className="register-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <div className="button-placement">
          <CustomButton type="submit">SIGN UP</CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUserStart: (email, password, additionalData) =>
      dispatch(registerUserStart(email, password, additionalData)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
