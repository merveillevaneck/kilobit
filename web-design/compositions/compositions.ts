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
import styled, {css} from 'styled-components';

import {StyledProps} from 'styled-components';
import { ViewProps, TextProps, AnimationProps } from './types';
import {animationProp} from './animation';

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

export const animation = animationProp;

export * from './types';

