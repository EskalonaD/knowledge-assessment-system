import { createStore, compose } from "redux";
import commonReducer, { initialState } from "../ducks/mainReducer";

export default createStore(
  commonReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
