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
import styled from 'styled-components';

import { ViewProps } from './types';

export const view = compose(
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

export const text = view;

export const View = styled.div<ViewProps>(view);

export * from './types';

