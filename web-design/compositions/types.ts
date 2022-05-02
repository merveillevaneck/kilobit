import React, { HTMLAttributes, HTMLProps } from 'react';
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  TypographyProps,
} from 'styled-system';

export interface ViewProps extends
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  TypographyProps,
  Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'title'> {
  
}

export interface TextProps extends ViewProps {}