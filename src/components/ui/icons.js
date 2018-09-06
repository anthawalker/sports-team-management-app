import React from 'react';
import { Link } from 'react-router-dom';

import logoManCity from '../../resources/images/logos/manchester_city_logo.png';

export const CityLogo = (props) => {
  
  const template = <div
    className="img_cover"
    style={{
      height: props.height,
      width: props.width,
      background: `url(${logoManCity}) no-repeat`
    }}
    >
  </div>
  
  if(props.link) {
    return (
      <Link to={ props.linkTo } className="link_logo">
        { template }
      </Link>
    );
  } else {
    return template;
  }
  
  

}