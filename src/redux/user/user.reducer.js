// Import action types
import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  // Can also use if-else-if statements if needed
  switch (action.type) {
    // Handle a successful user authentication.
    case UserActionTypes.SIGN_IN_SUCCESS:
      // modify only the current user. spread all other state values as usual
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    // Handle a successful user signout
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    // Handle a successful registration of a user
    case UserActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        error: null,
      };

    // Handle a failed process
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.REGISTER_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      // this is to handle if the userReducer has no actions to do for the type given
      // We wish the reduce the state we got untouched so that we dont bug it.
      return state;
  }
};

export default userReducer;
