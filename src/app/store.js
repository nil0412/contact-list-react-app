import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { contacts } from "../reducers";


const combinedReducers = combineReducers({
  contacts,
});

export const store = configureStore({
	reducer: combinedReducers,
	middleware: [thunk, logger],
});
