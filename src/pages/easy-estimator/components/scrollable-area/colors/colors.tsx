import React, { useContext } from 'react';

import './colors.scss';

/* eslint-disable-next-line */
export interface ColorsProps {}

export function Colors(props: ColorsProps) {
  console.log('Colors list rerendered');

  return (
    <div className="colorContainer">
      Color List
      {/* <ul>
        {colorFeature.colorList.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Colors;
