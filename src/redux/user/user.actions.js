// Import action types
import UserActionTypes from "./user.types";

/**
 * Redux action function to start the google based sign in process
 */
export const googleSignInStart = () => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
  };
};

/**
 * Redux action function to process the login process with standard email and
 * password policies.
 *
 * @param {String} email - The email login address of the user
 * @param {String} password - The password string from the user
 */
export const emailSignInStart = (email, password) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: {
      email: email,
      password: password,
    },
  };
};

/**
 * Redux action function to store the authenticated user.
 *
 * @param {Object} user - The Firebase.User object received after
 * a successful login process
 */
export const signInSuccess = (user) => {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

/**
 * Redux action function to handle the login process errors
 *
 * @param {String} error - The error message.
 */
export const signInFailure = (error) => {
  return {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
  };
};

/**
 * Redux action function to handle the persistance of user across sessions
 */
export const checkUserSession = () => {
  return {
    type: UserActionTypes.CHECK_USER_SESSION,
  };
};

/**
 * Redux action function to start the signout process for the user
 */
export const signOutStart = () => {
  return {
    type: UserActionTypes.SIGN_OUT_START,
  };
};

/**
 * Redux action function to handle a successful signout process for the user
 */
export const signOutSuccess = () => {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  };
};

/**
 * Redux action function to handle a failed signout process for the user
 *
 * @param {String} error - The error message for the signout process
 */
export const signOutFailure = (error) => {
  return {
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
  };
};

/**
 * Redux action function to start the registration process for the
 * new user profile.
 *
 * @param {String} email - The email of the registering user
 * @param {String} password - The associated password for the user profile
 * @param {Object} additionalData - Additional Metadata for the user profile
 */
export const registerUserStart = (email, password, additionalData) => {
  return {
    type: UserActionTypes.REGISTER_USER_START,
    payload: {
      email: email,
      password: password,
      ...additionalData,
    },
  };
};

/**
 * Redux action function to handle a successful registration process.
 *
 * @param {Object} user - The user reference object recieved after a successful
 * registration
 * @param {Object} additionalData - The set of additionalData like displayName
 */
export const registerUserSuccess = (user, additionalData) => {
  return {
    type: UserActionTypes.REGISTER_USER_SUCCESS,
    payload: {
      user: user,
      ...additionalData,
    },
  };
};

/**
 * Redux action function to handle the failure of the registration
 * process
 *
 * @param {String} error - The error message.
 */
export const registerUserFailure = (error) => {
  return {
    type: UserActionTypes.REGISTER_USER_FAILURE,
    payload: error,
  };
};
