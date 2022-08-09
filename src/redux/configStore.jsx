import { combineReducers, createStore } from "redux";
import { carReducer } from "./reducers/carReducer";
import { numberReducer } from "./reducers/numberReducer";
import { qlsvReducer } from "./reducers/qlsvReducer";


//rootReducer: state tong cua ung dung
const rootReducer = combineReducers({
  number: numberReducer,
  imgCar: carReducer,
  qlsvReducer: qlsvReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
