import React from 'react';

const MatchBlock = ({ match }) => {
  return (
    <div className="match_block">
      <div className="match_date">
        { match.final ? match.date : `Upcoming match: ${match.date}`}
      </div>
      <div className="match_wrapper">
        <div className="match_top">
          <div className="left">
            <div
              className="icon"
              style={{
                background: `url(/images/team_icons/${match.localThmb}.png)`
              }}
            ></div>
            <div className="team_name">
              {match.local}
            </div>
          </div>
          <div className="right">
            <div>
              {match.final ? match.resultLocal : '-'}
            </div>
          </div>
        </div>

        <div className="match_bottom">
          <div className="left">
            <div
              className="icon"
              style={{
                background: `url(/images/team_icons/${match.awayThmb}.png)`
              }}
            ></div>
            <div className="team_name">
              {match.local}
            </div>
          </div>
          <div className="right">
            <div>
              {match.final ? match.resultAway : '-'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchBlock;