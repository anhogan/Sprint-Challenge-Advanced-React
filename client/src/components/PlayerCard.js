import React from 'react';
import useFetch from './hooks/useFetch';

const PlayerCard = () => {
  const players = useFetch('http://localhost:5000/api/players', {});
  const data = Object.values(players.response);
  console.log(data);

  return (
    <div data-testid="player-section" className="player-section">
      {data.map(player => (
        <div className="player-div" key={player.id}>
          <h2 className="player-name">{player.name}</h2>
          <h4 className="player-country">{player.country}</h4>
          <p className="player-searches">Searches: {player.searches}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;