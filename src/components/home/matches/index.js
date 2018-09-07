import React from 'react';

import { Tag } from '../../utils/misc';
import Block from './Block';

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag
          bck="#0e1731"
          size="50px"
          color="#ffffff"
        >
          Matches
        </Tag>
        
        <Block />
        
        <Tag
          bck="#ffffff"
          size="22px"
          color="#0e1731"
          link={true}
          linkTo="/team"
        >
          See more matches
        </Tag>

      </div>
    </div>
  );
};

export default MatchesHome;