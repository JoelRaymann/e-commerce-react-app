import React from "react";
import { connect } from "react-redux";
import "./register.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import redux utils
import { registerUserStart } from "../../redux/user/user.actions";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    const { registerUserStart } = this.props;
    registerUserStart(email, password, { displayName });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="register-container">
        <h2 className="title">Don't have an account?</h2>
        <span className="subtitle">Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className="register-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <div className="button-placement">
            <CustomButton type="submit">SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUserStart: (email, password, additionalData) =>
      dispatch(registerUserStart(email, password, additionalData)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
