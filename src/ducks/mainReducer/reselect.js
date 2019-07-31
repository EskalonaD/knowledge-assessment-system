import { createSelector } from "reselect";

const main = state => state;

export const selectData = createSelector(
  main,
  ({ data }) => data || [] //
);

export const selectTestNumber = createSelector(
  main,
  ({ selectedTest }) => selectedTest
);
