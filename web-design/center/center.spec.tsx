import React from 'react';
import { render } from '@testing-library/react';
import { BasicCenter } from './center.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCenter />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
