import React from 'react';

const PlayerCard = (props) => {
  return (
    <div>
      {props.players.map(player => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <h4>{player.country}</h4>
          <p>Searches: {player.searches}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;