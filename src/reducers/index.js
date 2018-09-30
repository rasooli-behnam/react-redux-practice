import { combineReducers } from "redux";
import BooksReducer from "./BooksReducer";
import ActiveBookReducer from "./ActiveBookReducer";

const reducers = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default reducers;
