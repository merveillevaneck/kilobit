import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  typography,
  layout,
  color,
  space,
  TypographyProps,
  LayoutProps,
  ColorProps,
  SpaceProps,
} from 'styled-system';

export const TitleTag = styled.h3(
  typography,
  layout,
  color,
  space,
);

export interface TitleProps extends TypographyProps, LayoutProps, ColorProps, SpaceProps {
  children?: React.ReactNode;
}

export const Title: React.FC<TitleProps> = props => {
  const {children, ...rest} = props;
  return (
    <TitleTag color="red" fontSize="24px" {...rest}>
      {children}
    </TitleTag>
  );
}
