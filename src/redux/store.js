import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistMiddleware } from "./middleWare";

const enhancer = applyMiddleware(thunk, logger, persistMiddleware);
export const store = createStore(reducer, enhancer);
