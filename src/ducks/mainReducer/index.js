import data from "@dataBase/test.json";

// list of constances
const SET_SELECTED_TEST = "SET_SELECTED_TEST";
const SET_SELECTED_STATISTIC = "SET_SELECTED_STATISTIC";
const SET_SEARCHED_STR = "SET_SEARCHED_STR";
const SET_SEARCHED_STR_FOR_STATISTIC = "SET_SEARCHED_STR_FOR_STATISTIC";
const SET_SORTED_TYPE = "SET_SORTED_TYPE";
const SET_SORTED_TYPE_FOR_STATISTIC = "SET_SORTED_TYPE_FOR_STATISTIC";



// list of Actions
export function setSelectedTest(data) {
  return { type: SET_SELECTED_TEST, payload: data };
};
export const setSelectedStatistic = data => ({type: SET_SELECTED_STATISTIC, payload: data});
export const setSearchedStr = data => ({ type: SET_SEARCHED_STR, payload: data });
export const setSearchedStrForStatistic = data => ({ type: SET_SEARCHED_STR_FOR_STATISTIC, payload: data });
export const setSortedType = data => ({ type: SET_SORTED_TYPE, payload: data });
export const setSortedTypeForStatistic = data => ({ type: SET_SORTED_TYPE_FOR_STATISTIC, payload: data });

// initialState
export const initialState = { //initialState should be placed before constances???
  data: data,
  selectedTest: null,
  selectedStatistic: null,
  searchedStr: ``,
  searchedStrForStatistic: ``,
  sortedType: `resetSortedType`,
  sortedTypeForStatistic: `resetSortedType`
  // matchedDataForStatistic: ``
};

// reducer
export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_TEST:
      return {
        ...state,
        selectedTest: action.payload
      };
      case SET_SELECTED_STATISTIC:
        return {
          ...state,
          selectedStatistic: action.payload
        };
    case SET_SEARCHED_STR:
      return {
        ...state,
        searchedStr: action.payload
      };
    case SET_SEARCHED_STR_FOR_STATISTIC:
      return {
        ...state,
        searchedStrForStatistic: action.payload
      };
    case SET_SORTED_TYPE:
      return {
        ...state,
        sortedType: action.payload
      };
    case SET_SORTED_TYPE_FOR_STATISTIC:
      return {
        ...state,
        sortedTypeForStatistic: action.payload
      };

    default:
      return state;
  }
}
