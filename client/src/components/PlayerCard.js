import React from 'react';
import { PlayerSection, PlayerCardDiv, PlayerName, PlayerCountry, PlayerSearches } from './StyledComponents';

const PlayerCard = (props) => {
  return (
    <PlayerSection>
      {props.players.map(player => (
        <PlayerCardDiv key={player.id}>
          <PlayerName>{player.name}</PlayerName>
          <PlayerCountry>{player.country}</PlayerCountry>
          <PlayerSearches>Searches: {player.searches}</PlayerSearches>
        </PlayerCardDiv>
      ))}
    </PlayerSection>
  );
};

export default PlayerCard;