import React from 'react';
import { render } from '@testing-library/react';

import Materials from './materials';

describe('Materials', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Materials />);
    expect(baseElement).toBeTruthy();
  });
});
