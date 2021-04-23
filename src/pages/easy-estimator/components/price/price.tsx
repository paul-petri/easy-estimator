import React from 'react';

import './price.scss';

export interface PriceProps {}

export function Price(props: PriceProps) {
  return (
    <div className="price-container">
      <h1>Estimate Pricing</h1>
      <div> You have to select a material and a color to see the price</div>
    </div>
  );
}

export default Price;
