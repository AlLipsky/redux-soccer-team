import { combineReducers } from "redux";
import teamReducer, { moduleName as teamModule } from "../model/team";

export default combineReducers({
  [teamModule]: teamReducer,
});
