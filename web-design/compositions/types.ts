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
  as?: React.ElementType;
  children?: React.ReactNode;
}

export interface ButtonProps extends
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
  Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'title'> {
  as?: React.ElementType;
  children?: React.ReactNode;
}
export interface TextProps extends ViewProps { }