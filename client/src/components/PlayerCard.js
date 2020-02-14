import React from 'react';

const PlayerCard = (props) => {
  return (
    <div data-testid="player-section" className="player-section">
      {props.players.map(player => (
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