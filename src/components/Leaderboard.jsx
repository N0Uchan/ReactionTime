import { useState, useEffect } from "react";
import { getLeaderboard } from "./httpReq.js";
import refreshIcon from "../assets/refresh.png"

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchLeaderBoard();
  }, []);
  async function fetchLeaderBoard() {
    setIsFetching(true);

    try {
      const resData = await getLeaderboard();
      setLeaderboard(resData);
      setLeaderboard(resData);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
    setIsFetching(false);
  }

  function refreshLeaderboard(){
    fetchLeaderBoard();
  }

  return (
    <div id='resultContainer'>
      <h2>Leaderboard  <button id="refreshBtn"  onClick={refreshLeaderboard} >
        <img src={refreshIcon} id="refreshImg" /></button> </h2>
      {error && (
        <>
          <h3>An Error Occured</h3>
          <p>{error}</p>
          <p>Try Reloading or Checking your network connection.</p>
        </>
      )}
      {isFetching && <p>Loading Leaderboard Stats..</p>}
      {!isFetching && leaderboard.length === 0 && <p>No Stats Available</p>}
      {!isFetching && leaderboard.length > 0 && (
        <table>
          <thead>
            <tr id='leaderboardHeader'>
              <th>Rank</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr
                key={entry._id}
                id='leaderboardItem'
              >
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.time}ms</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
