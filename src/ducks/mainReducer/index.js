import data from "@dataBase/test.json";

// initialState
export const initialState = { //initialState should be placed before constances???
  data: data,
  selectedTest: null,
  selectedStatistic: null,
  searchedStr: ``,
  searchedStrForStatistic: ``,
  sortedType: `resetSortedType`,
  sortedTypeForStatistic: `resetSortedType`,
  isTestStarted: false,
  isTestEnded: false,
  questionNumber: 0,
  timerId: null,
  answerCollector: [],
  completedTests: {},
  sliderTranslateValue: 0
  // matchedDataForStatistic: ``
};

// list of constances
const SET_SELECTED_TEST = "SET_SELECTED_TEST";
const SET_SELECTED_STATISTIC = "SET_SELECTED_STATISTIC";
const SET_SEARCHED_STR = "SET_SEARCHED_STR";
const SET_SEARCHED_STR_FOR_STATISTIC = "SET_SEARCHED_STR_FOR_STATISTIC";
const SET_SORTED_TYPE = "SET_SORTED_TYPE";
const SET_SORTED_TYPE_FOR_STATISTIC = "SET_SORTED_TYPE_FOR_STATISTIC";
const SET_IS_TEST_STARTED = "SET_IS_TEST_STARTED";
const SET_IS_TEST_ENDED = "SET_IS_TEST_ENDED";
const SET_QUESTION_NUMBER= "SET_QUESTION_NUMBER";
const SET_TIMER_ID = "SET_TIMER_ID";
const SET_ANSWER_COLLECTOR = "SET_ANSWER_COLLECTOR";
const RESET_ANSWER_COLLECTOR = "RESET_ANSWER_COLLECTOR";
const SET_COMPLETED_TESTS = "SET_COMPLETED_TESTS";
const SET_SLIDER_TRANSLATE_VALUE = "SET_SLIDER_TRANSLATE_VALUE";



// list of Actions
export function setSelectedTest(data) {
  return { type: SET_SELECTED_TEST, payload: data };
};
export const setSelectedStatistic = data => ({type: SET_SELECTED_STATISTIC, payload: data});
export const setSearchedStr = data => ({ type: SET_SEARCHED_STR, payload: data });
export const setSearchedStrForStatistic = data => ({ type: SET_SEARCHED_STR_FOR_STATISTIC, payload: data });
export const setSortedType = data => ({ type: SET_SORTED_TYPE, payload: data });
export const setSortedTypeForStatistic = data => ({ type: SET_SORTED_TYPE_FOR_STATISTIC, payload: data });
export const setIsTestStarted = data => ({type: SET_IS_TEST_STARTED, payload: data});
export const setIsTestEnded = data => ({type: SET_IS_TEST_ENDED, payload: data});
export const setQuestionNumber = data => ({type: SET_QUESTION_NUMBER, payload: data});
export const setTimerId = data => ({type: SET_TIMER_ID, payload: data});
export const setAnswerCollector = data => ({type: SET_ANSWER_COLLECTOR, payload: data});
export const resetAnswerCollector = () => ({type: RESET_ANSWER_COLLECTOR});
export const setCompletedTests = (data) => ({type: SET_COMPLETED_TESTS, payload: data})
export const setSliderTranslateValue = (data) => ({type: SET_SLIDER_TRANSLATE_VALUE, payload: data})

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
      case SET_IS_TEST_STARTED:
        return {
          ...state,
          isTestStarted: action.payload
        };
      case SET_IS_TEST_ENDED:
        return {
          ...state,
          isTestEnded: action.payload
        };
      case SET_QUESTION_NUMBER:
        return {
          ...state,
          questionNumber: action.payload
        };
      case SET_TIMER_ID:
        return {
          ...state,
          timerId: action.payload
        };
        case SET_ANSWER_COLLECTOR:
            return {
              ...state,
              answerCollector: [...state.answerCollector, action.payload]
            };
        case RESET_ANSWER_COLLECTOR:
            return {
              ...state,
              answerCollector: []
            };
        case SET_COMPLETED_TESTS:
            return {
              ...state,
              completedTests: {...state.completedTests, [action.payload]: true}
            };
        case SET_SLIDER_TRANSLATE_VALUE:
            return {
              ...state,
              sliderTranslateValue: action.payload
            };
      
      default:
      return state;
  }
}
