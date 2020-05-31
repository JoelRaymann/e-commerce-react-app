// Import test sample
import { SECTIONS_DATA } from "../../data/sections.data";

const INITIAL_STATE = {
  directoryItems: SECTIONS_DATA,
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
