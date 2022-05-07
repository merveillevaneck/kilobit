import React from 'react';
import { render } from '@testing-library/react';
import { BasicTitleGraphic } from './title-graphic.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTitleGraphic />);
  const rendered = getByText('KiloLab');
  expect(rendered).toBeTruthy();
});
