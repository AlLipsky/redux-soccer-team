import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistMiddleware, fetchDataMiddleware } from "./middleWare";

const enhancer = applyMiddleware(thunk, logger, persistMiddleware, fetchDataMiddleware);
export const store = createStore(reducer, enhancer);
