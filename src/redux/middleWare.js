import axios from "axios";
import apis from './endpointsMap'
import { ADD_TO_FAVORITE } from "../model/team";

export const persistMiddleware = ({dispatch, getState}) => (next) => (action) => {
  if (action.type === ADD_TO_FAVORITE) {
    localStorage.setItem("favoriteTeams", JSON.stringify(action.payload));
  }
  // must have it in any middleware
  return next(action);
};


export const fetchDataMiddleware = (storeApi) => (next) => (action) => {

  if(action.type.includes('REQUEST')){
    axios.get(
      apis()[action.type].url
    )
      .then(({ data }) => {
        storeApi.dispatch({
          type: action.type.replace('REQUEST', 'SUCCESS'),
          payload: apis()[action.type].selector(data),
        });
      })
      .catch((error) =>
        storeApi.dispatch({
          type: action.type.replace('REQUEST', 'ERROR'),
          payload: error,
        })
      );
  }


  return next(action);
}
