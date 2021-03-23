import "./App.css";
import { connect } from "react-redux";
import {
  fetchData,
  teamListSelector,
  favoriteTeamListSelector,
  addTofavorite,
} from "./model/team";
import { useEffect } from "react";
import TeamTable from "./Components/TeamTable";

const App = ({ fetchData, ...props }) => {
  useEffect(() => fetchData(), [fetchData]);

  return (
    <div className="container">
      <TeamTable {...props} />
    </div>
  );
};
export default connect(
  (state) => ({
    teamList: teamListSelector(state),
    favoriteTeamList: favoriteTeamListSelector(state),
  }),
  { fetchData, addTofavorite }
)(App);
