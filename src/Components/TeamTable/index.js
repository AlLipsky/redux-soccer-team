import { Table } from "react-bootstrap";
import { TeamTableRow } from "../TableComponent/TeamTableRow";
import { Loader } from "../../Utils/Loader/Loader";
import "./style.css";

const TeamTable = ({
  teamList,
  addToFavoriteInputHandler,
  favoriteElements,
}) => {
  console.log(teamList);
  const teamRowsArray =
    teamList[0].map((team, index) => {
      return (
        <TeamTableRow
          {...team}
          key={index}
          index={index + 1}
          isChecked={favoriteElements.includes(index + 1)}
          addToFavoriteInputHandler={() => addToFavoriteInputHandler(index + 1)}
        />
      );
    }) || [];
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
