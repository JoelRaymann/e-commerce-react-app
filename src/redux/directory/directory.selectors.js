import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorItems = createSelector(
  [selectDirectory],
  (directory) => directory.directoryItems
);
