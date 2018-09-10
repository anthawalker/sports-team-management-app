import React from 'react';

import PromotionAnimation from './PromotionAnimation';

const Promotion = () => {
  return (
    <div
      className="promotion_wrapper"
      style={{
        background: '#ffffff'
      }}
    >
      <div className="container">
        <PromotionAnimation />
      </div>
    </div>
  );
};

export default Promotion;