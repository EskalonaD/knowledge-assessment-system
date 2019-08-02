import data from "@dataBase/test.json";

const SET_SELECTED_TEST = "SET_SELECTED_TEST";
const SET_SEARCH = "SET_SEARCH";

export function CommonAction(data) {
  return { type: SET_SELECTED_TEST, payload: data };
}

export const setSearchStr = data => ({ type: SET_SEARCH, payload: data });

export const initialState = {
  searchStr: ``,
  data: data,
  selectedTest: null
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_TEST:
      return {
        ...state,
        selectedTest: action.payload
      };
    case SET_SEARCH:
      return {
        ...state,
        searchStr: action.payload
      };
    default:
      return state;
  }
}
