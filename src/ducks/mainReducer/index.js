import data from "@dataBase/test.json";

const SET_SELECTED_TEST = `SET_SELECTED_TEST`;

export function CommonAction(data) {
  return { type: SET_SELECTED_TEST, payload: data };
}

export const initialState = {
  data: data,
  selectedTest: null
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case `SET_SELECTED_TEST`:
      return {
        ...state,
        selectedTest: action.payload
      };
    default:
      return state;
  }
}
