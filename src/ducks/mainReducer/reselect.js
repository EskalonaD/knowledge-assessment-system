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

export const selectSearchedStr = createSelector(
  main,
  ({ searchedStr }) => searchedStr
);

export const selectSearchedStrForStatistic = createSelector(
  main,
  ({searchedStrForStatistic}) => searchedStrForStatistic
)

export const selectSearcheDataForTests= createSelector(
  selectData,
  selectSearchedStr,
  (data, searchedStr) => data.filter(el => el.name.includes(searchedStr))
);

export const selectSearchedDataForStatistic = createSelector(
  selectData,
  selectSearchedStrForStatistic,
  (data, searchedStr) => data.filter(el => el.name.includes(searchedStr))
)

export const selectSortedType = createSelector(
  main,
  ({ sortedType }) => sortedType
);

export const selectSortedTypeForStatistic = createSelector(
  main,
  ({sortedTypeForStatistic}) => sortedTypeForStatistic
)

export const selectMatchedDataForStatistic = createSelector(
  selectSearchedDataForStatistic,
  (data) => data.filter(el => Object.keys(localStorage).some(item => item === el.name))
)

export const selectSortedDataForTests = createSelector(
  selectSortedType,
  selectSearcheDataForTests,
  (sortedType, searchedData) => {
    return [...searchedData].sort((a, b) => {
      if (sortedType === `resetSortedType`) return 0;

      const firstItem = a[sortedType];
      const secondItem = b[sortedType];

      return sortedType === `questions`
        ? firstItem.length - secondItem.length
        : firstItem - secondItem;
    });
  }
);

export const selectSortedDataForStatistic = createSelector(
  selectSortedTypeForStatistic,
  selectMatchedDataForStatistic,
  (sortedType, searchedData) => {
    return [...searchedData].sort((a, b) => {
      if (sortedType === `resetSortedType`) return 0;

      const firstItem = a[sortedType];
      const secondItem = b[sortedType];

      return sortedType === `questions`
        ? firstItem.length - secondItem.length
        : firstItem - secondItem;
    });
  }
)

export const selectSelectedStatistic = createSelector(
  main,
  ({selectedStatistic}) => selectedStatistic
)
