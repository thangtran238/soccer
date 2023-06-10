import React, { useState, useEffect } from "react";

const PlayerDetail = ({ playerId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`/api/players/${playerId}`);
        const data = await response.json();
        setPlayer(data);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, [playerId]);

  if (!player) {
    return <div>Loading player data...</div>;
  }

  return (
    <div>
      <h2>Player Details</h2>
      aaaaaa
      <p>Name: {player.name}</p>
      <p>Age: {player.age}</p>
      <p>Country: {player.country}</p>
      <p>CLB: {player.CLB}</p>
    </div>
  );
};

export default PlayerDetail;
