import { combineReducers } from "redux";
import { wordReducer } from "./reducer";

export const rootReducer = combineReducers({
  word: wordReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
