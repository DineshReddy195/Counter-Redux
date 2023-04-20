import { applyMiddleware, legacy_createStore } from "redux";
import counterReducer from "./Reducer";
import logger from "redux-logger";

const store=legacy_createStore(counterReducer,applyMiddleware(logger));

export default store