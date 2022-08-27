import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  position,
  display,
  layout,
  flexbox,
  color,
  space,
  border,
  background,
  LayoutProps,
  FlexboxProps,
  ColorProps,
  SpaceProps,
  BorderProps,
  BackgroundProps,
  DisplayProps,
  PositionProps,
} from 'styled-system';

export const DEFAULT_HEADER_HEIGHT = 60;

export const HeaderContainer = styled.div(
  position,
  layout,
  flexbox,
  color,
  space,
  border,
  background,
  display,
);

export const HeaderContent = styled(HeaderContainer)``;

export type StyleProps =
  LayoutProps
  & FlexboxProps
  & ColorProps
  & SpaceProps
  & BackgroundProps
  & BorderProps
  & DisplayProps
  & PositionProps

export type HeaderProps = {
  RightElement?: React.ReactElement;
  LeftElement?: React.ReactElement;
  title?: React.ReactNode;
  _headerContent?: StyleProps;
} & StyleProps;

export const Header: React.FC<HeaderProps> = props => {

  const {children, LeftElement, RightElement, title, height = DEFAULT_HEADER_HEIGHT, _headerContent, ...rest} = props;

  return (
    <HeaderContainer
      width="100%"
      paddingX="10px"
      backgroundColor="rgba(15, 125, 50, 0.5)"
      height={height}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      {...rest}>
      {LeftElement}
      <HeaderContent flex={1} {..._headerContent}>
        {title}
        {children}
      </HeaderContent>
      {RightElement}
    </HeaderContainer>
  );
}

