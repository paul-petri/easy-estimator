import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './scrollable-area.module.scss';
import Materials from './materials/materials';
import Colors from './colors/colors';
import { Canvas } from './canvas/canvas';
import { AddressInformation } from './address-information/address-information';

export interface ScrollableAreaProps {
  active?: string;
  elementIntoViewChanged?: () => void; // TODO when another element gets into view
}

// TODO type instead of any
function smoothScrollIntoView(element: any): void {
  if (element !== null && element.current !== null) {
    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }
}

export function ScrollableArea(props: ScrollableAreaProps) {
  const colorRef: any = useRef(null);
  const countertopRef: any = useRef(null);
  const materialRef: any = useRef(null);
  const informationRef: any = useRef(null);

  useLayoutEffect(() => {
    switch (props.active) {
      case 'color':
        smoothScrollIntoView(colorRef);
        break;
      case 'material':
        smoothScrollIntoView(materialRef);
        break;
      case 'countertop':
        smoothScrollIntoView(countertopRef);
        break;
      case 'information':
        smoothScrollIntoView(informationRef);
        break;
    }
  }, [props.active]);

  return (
    <>
      <div id="information" ref={informationRef}>
        <AddressInformation />
      </div>

      <div id="material" ref={materialRef}>
        <Materials />
      </div>
      <div id="color" ref={colorRef}>
        <Colors />
      </div>

      <div id="countertop" ref={countertopRef}>
        <Canvas />
      </div>
    </>
  );
}

export default ScrollableArea;
