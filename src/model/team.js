import axios from "axios";
import { createSelector } from "reselect";

export const moduleName = "team";
export const FETCH_SOCCER_TEAM_LIST = `${moduleName}/INIT_CURRENCY_TITLE_LIST`;
export const ADD_TO_FAVORITE = `${moduleName}/ADD_TO_FAVORITE`;

export const initialState = {
  teamList: null,
  favoriteTeamList:
    (localStorage.getItem("favoriteTeams") &&
      JSON.parse(localStorage.getItem("favoriteTeams"))) ||
    [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SOCCER_TEAM_LIST:
      return { ...state, teamList: payload };
      break;
    case ADD_TO_FAVORITE:
      return { ...state, favoriteTeamList: payload };
    default:
      return state;
  }
}
export const stateSelector = (state) => state[moduleName];
export const teamListSelector = createSelector(
  stateSelector,
  (state) => state.teamList
);
export const favoriteTeamListSelector = createSelector(
  stateSelector,
  (state) => state.favoriteTeamList
);

export const fetchData = () => (dispatch) => {
  const { data } = axios
    .get(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
    .then(({ data }) => {
      dispatch({
        type: FETCH_SOCCER_TEAM_LIST,
        payload: { ...data },
      });
    })
    .catch((error) =>
      dispatch({
        type: FETCH_SOCCER_TEAM_LIST,
        payload: null,
      })
    );
};

export const addTofavorite = (favoriteList) => ({
  type: ADD_TO_FAVORITE,
  payload: favoriteList,
});
