import { createSelector } from "reselect";

const main = state => state;

export const selectData = createSelector(
  main,
  ({ data }) => data || []
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
  ({ searchedStrForStatistic }) => searchedStrForStatistic
);

export const selectSearcheDataForTests = createSelector(
  selectData,
  selectSearchedStr,
  (data, searchedStr) => data.filter(el => el.name.includes(searchedStr))
);

export const selectSearchedDataForStatistic = createSelector(
  selectData,
  selectSearchedStrForStatistic,
  (data, searchedStr) => data.filter(el => el.name.includes(searchedStr))
);

export const selectSortedType = createSelector(
  main,
  ({ sortedType }) => sortedType
);

export const selectSortedTypeForStatistic = createSelector(
  main,
  ({ sortedTypeForStatistic }) => sortedTypeForStatistic
);

export const selectSortedDataForTests = createSelector(
  selectSortedType,
  selectSearcheDataForTests,
  (sortedType, searchedData) => {
    return [...searchedData].sort((a, b) => {
      if (sortedType === `resetSortedType`) return 0;

      const firstItem = a[sortedType];
      const secondItem = b[sortedType];

      if (sortedType === `name`) return firstItem < secondItem ? -1 : 1;

      return sortedType === `questions`
        ? firstItem.length - secondItem.length
        : firstItem - secondItem;
    });
  }
);

export const selectSortedDataForStatistic = createSelector(
  selectSortedTypeForStatistic,
  selectSearchedDataForStatistic,
  (sortedType, searchedData) => {
    return [...searchedData].sort((a, b) => {
      if (sortedType === `resetSortedType`) return 0;

      const firstItem = a[sortedType];
      const secondItem = b[sortedType];

      if (sortedType === `name`) return firstItem < secondItem ? -1 : 1;

      return sortedType === `questions`
        ? firstItem.length - secondItem.length
        : firstItem - secondItem;
    });
  }
);

export const selectSelectedStatistic = createSelector(
  main,
  ({ selectedStatistic }) => selectedStatistic
);

export const selectIsTestStarted = createSelector(
  main,
  ({ isTestStarted }) => isTestStarted
);

export const selectIsTestEnded = createSelector(
  main,
  ({ isTestEnded }) => isTestEnded
);

export const selectedQuestionNumber = createSelector(
  main,
  ({ questionNumber }) => questionNumber
);

export const selectTimerId = createSelector(
  main,
  ({ timerId }) => timerId
);

export const selectAnswerCollector = createSelector(
  main,
  ({ answerCollector }) => answerCollector
);

export const selectCompletedTests = createSelector(
  main,
  ({ completedTests }) => completedTests
);

export const selectSliderTranslateValue = createSelector(
  main,
  ({ sliderTranslateValue }) => sliderTranslateValue
);
