import { combineReducers, createStore } from "redux";
import { progressReducer, setPage, setPhoto, userDetailsReducer } from "./Reducer";

const rootReducer = combineReducers({
  userDetails: userDetailsReducer,
  Progress : progressReducer,
  Page:setPage,
  Photo:setPhoto,
  
});

const store = createStore(rootReducer);

export default store;
