import { Table } from "react-bootstrap";
import { TeamTableRow } from "../TableComponent/TeamTableRow";
import { Loader } from "../../Utils/Loader/Loader";
import "./style.css";

const TeamTable = ({ teamList, addTofavorite, favoriteTeamList }) => {
  const teamRowsArray =
    (teamList &&
      teamList.teams.length &&
      teamList.teams.map((team, index) => {
        return (
          <TeamTableRow
            {...team}
            key={index}
            index={index + 1}
            isChecked={favoriteTeamList.includes(index + 1)}
            addToFavoriteInputHandler={() => {
              if (favoriteTeamList.includes(index + 1)) {
                addTofavorite(
                  favoriteTeamList.filter((item) => item !== index + 1)
                );
              } else {
                addTofavorite([...favoriteTeamList, index + 1]);
              }
            }}
          />
        );
      })) ||
    [];
  return teamRowsArray.length > 0 ? (
    <Table striped bordered className="table">
      <thead>
        <tr>
          <th></th>
          <th>Crest</th>
          <th>Team name</th>
          <th>Founded</th>
          <th>Add to favorite</th>
        </tr>
      </thead>
      <tbody>{teamRowsArray}</tbody>
    </Table>
  ) : (
    <Loader />
  );
};

export default TeamTable;
