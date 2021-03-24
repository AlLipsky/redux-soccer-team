import { createSelector } from "reselect";

export const moduleName = "team";
export const FETCH_SOCCER_TEAM_LIST_REQUEST = `${moduleName}/FETCH_SOCCER_TEAM_LIST_REQUEST`;
export const FETCH_SOCCER_TEAM_LIST_SUCCESS = `${moduleName}/FETCH_SOCCER_TEAM_LIST_SUCCESS`;
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
    case FETCH_SOCCER_TEAM_LIST_SUCCESS:
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

export const fetchData = () => ({
  type: FETCH_SOCCER_TEAM_LIST_REQUEST
})

// export const fetchData = () => (dispatch) => {
//   const { data } = axios
//     .get(
//       "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
//     )
//     .then(({ data }) => {
//       dispatch({
//         type: FETCH_SOCCER_TEAM_LIST,
//         payload: { ...data },
//       });
//     })
//     .catch((error) =>
//       dispatch({
//         type: FETCH_SOCCER_TEAM_LIST,
//         payload: null,
//       })
//     );
// };

export const addTofavorite = (index) => (dispatch, getState) => {
  let { favoriteTeamList } = getState()[moduleName];
  let newFavoriteTeamList = [...favoriteTeamList];
  if (favoriteTeamList.includes(index + 1)) {
    newFavoriteTeamList = [...newFavoriteTeamList].filter(
      (item) => item !== index + 1
    );
  } else {
    newFavoriteTeamList = [...favoriteTeamList, index + 1];
  }
  dispatch({
    type: ADD_TO_FAVORITE,
    payload: newFavoriteTeamList,
  });
};
