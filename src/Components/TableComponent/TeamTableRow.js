import "./TeamTableRow.css";

export const TeamTableRow = (team) => {
  return (
    <tr>
      <td>{team.index}</td>
      <td>
        <img
          className="crestImage"
          src={team.strTeamBadge}
          alt="team logo"
        ></img>
      </td>
      <td>{team.strTeam}</td>
      <td>{team.intFormedYear}</td>
      <td>
        <input
          type="checkbox"
          checked={team.isChecked}
          onChange={team.addToFavoriteInputHandler}
        />
      </td>
    </tr>
  );
};
