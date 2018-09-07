import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import Stripes from '../../../resources/images/stripes.png';
import { Tag } from '../../utils/misc';
import Cards from './Cards';

class MeetPlayers extends Component {
  
  state = {
    tagText: ['Meet', 'the', 'players'],
    show: false
  }

  renderTag = (text, key) => {
    return (
      <div key={key}>
        <Tag
          bck="#0e1731"
          size="100px"
          color="#ffffff"
          add={{
            display: 'inline-block',
            marginBottom: '20px'
          }}
        >
          {text}
        </Tag>
      </div>
    )
  }
  
  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          });
        }}
      >
        <div
          className="home_meetplayers"
          style={{
            background: `#ffffff url(${Stripes})`
          }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <Cards
                  show={this.state.show}
                />
              </div>
              <div className="home_text_wrapper">
                {this.state.tagText.map((text, i) => this.renderTag(text, `__${i}`))}
                <div>
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#0e1731"
                    link={true}
                    linkTo="/team"
                    add={{
                      display: 'inline-block',
                      marginBottom: '27px',
                      border: '1px solid #0e1731'
                    }}
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;