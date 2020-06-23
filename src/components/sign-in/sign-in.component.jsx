import React from "react";
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

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    // Getting attributes/props from input tags. Here,
    // getting value and name from input tags so that i
    // can dynamically update the state. (MAY CAUSE Async State Problem?)
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2 className="title">Already have an account?</h2>
        <span>Sign in with your email and password</span>

        {/* Form starts here */}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            handleChange={this.handleChange}
            type="email"
            name="email"
            value={this.state.email}
            required
          />
          <FormInput
            label="password"
            handleChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
