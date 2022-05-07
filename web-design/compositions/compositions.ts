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
  system,
} from 'styled-system';
import styled from 'styled-components';

import { ViewProps, TextProps } from './types';

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

export const text = compose(view);

export const View = styled.div<ViewProps>({ fontFamily: 'Helvetica' }, view);
export const Text = styled.p<TextProps>({ fontFamily: 'Helvetica' }, text);

export * from './types';

