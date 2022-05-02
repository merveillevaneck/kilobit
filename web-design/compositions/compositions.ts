import {
  space,
  color,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  typography,
  compose,
} from 'styled-system';

export const viewProps = compose(
  space,
  color,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  typography,
);

export const textProps = compose(
  viewProps
);

export * from './types';