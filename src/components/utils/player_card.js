import React from 'react';

const PlayerCard = ({ bck, number, firstName, lastName }) => {
  return (
    <div className="player_card_wrapper">
      <div
        className="player_card_thmb"
        style={{
          background: `#f2f9ff url(${bck})`
        }}
      ></div>
      <div className="player_card_info">
        <div className="player_card_number">
          { number }
        </div>
        <div className="player_card_name">
          <span>{ firstName }</span>
          <span>{ lastName }</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;