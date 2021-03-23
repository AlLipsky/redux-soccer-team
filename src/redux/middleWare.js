import { ADD_TO_FAVORITE } from "../model/team";

export const persistMiddleware = (storeApi) => (next) => (action) => {
  if (action.type === ADD_TO_FAVORITE) {
    localStorage.setItem("favoriteTeams", JSON.stringify(action.payload));
  }
  // must have it in any middleware
  return next(action);
};
