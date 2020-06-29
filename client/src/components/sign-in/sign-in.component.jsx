import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";

// Import component
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import redux actions
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

/**
 * Functional Sign-in Component to display the sign-in form and handle the signing
 * in process for the user.
 *
 * @param {React.Props} props - The properities needed by the SignIn component.
 * Currently needs no props for functioning.
 */
const SignIn = (props) => {
  const { googleSignInStart, emailSignInStart } = props;

  // Define state variables
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  // NOTE: Define in-house functions here
  /**
   * Function to handle the changes in the form inputs
   *
   * @param {React.SyntheticEvent} event - The onChange() synthetic event
   */
  function handleChange(event) {
    const { value, name } = event.target;

    // spread the user credentials and only update the necessary ones
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  }

  /**
   * Function to handle the submission of the login form
   *
   * @param {React.SyntheticEvent} event - The onSubmit() synthetic event
   */
  function handleSubmit(event) {
    // disable inate reloading behaviour of onSubmit()
    event.preventDefault();

    const { email, password } = userCredentials;
    emailSignInStart(email, password);
  }

  // Return the rendering html
  return (
    <div className="sign-in">
      <h2 className="title">Already have an account?</h2>
      <span>Sign in with your email and password</span>

      {/* Form starts here */}
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          handleChange={handleChange}
          type="email"
          name="email"
          value={userCredentials.email}
          required
        />
        <FormInput
          label="password"
          handleChange={handleChange}
          type="password"
          name="password"
          value={userCredentials.password}
          required
        />
        <div className="button-placement">
          <CustomButton type="submit" value="Submit Form">
            Sign In
          </CustomButton>
          <CustomButton
            type="button"
            specialClassStyle="google-sign-in"
            onClick={googleSignInStart}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
