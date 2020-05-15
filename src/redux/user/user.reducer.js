const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  // Can also use if-else-if statements if needed
  switch (action.type) {
    case "SET_CURRENT_USER":
      // modify only the current user. spread all other state values as usual
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      // this is to handle if the userReducer has no actions to do for the type given
      // We wish the reduce the state we got untouched so that we dont bug it.
      return state;
  }
};

export default userReducer;
