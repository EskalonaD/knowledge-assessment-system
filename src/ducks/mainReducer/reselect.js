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

export const selectTest = createSelector(
  selectData,
  selectTestNumber,
  (data, testNumber) => data[testNumber]
);

export const selectSearchStr = createSelector(
  main,
  ({ searchStr }) => searchStr
);

export const selectFilteredTestsBySearch = createSelector(
  selectData,
  selectSearchStr,
  (data, searchStr) => data.filter(el => el.name.includes(searchStr))
);

export const selectSortType = createSelector(
  main,
  ({ sortType }) => sortType
);
