import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

import { dbMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../utils/misc';
import MatchBlock from '../../utils/match_block';

class Block extends Component {
  
  state = {
    matches: []
  }

  componentDidMount() {
    dbMatches.limitToLast(6).once('value').then((snapshot) => {
      const matches = firebaseLooper(snapshot);
      
      this.setState({
        matches: reverseArray(matches)
      });
    })
  }
  

  showMatches = (matches) => (
    matches && matches.map((match, i) => (
      <Slide
        bottom
        key={`__${i}`}
      >
        <div className="item">
          <div className="wrapper">
            <MatchBlock
              match={match}
            />
          </div>
        </div>
      </Slide>
    ))
  )
  
  render() {
    console.log(this.state);
    return (
      <div className="home_matches">
        {this.showMatches(this.state.matches)}
      </div>
    );
  }
}

export default Block;