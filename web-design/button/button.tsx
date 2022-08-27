import React from 'react'
import styled from 'styled-components';
import {
  layout,
  space,
  color,
  background,
  display,
  flexbox,
  border,
  position,
  shadow,
  LayoutProps,
  SpaceProps,
  ColorProps,
  BackgroundProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';

const DefaultButton = styled.button`
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  box-shadow: none;
`;

const ButtonContainer = styled(DefaultButton)(
  layout,
  space,
  color,
  background,
  display,
  flexbox,
  border,
  position,
  shadow,
);

export type StyleProps = 
  LayoutProps
  & SpaceProps
  & ColorProps
  & BackgroundProps
  & FlexboxProps
  & BorderProps
  & PositionProps
  & ShadowProps


export interface ButtonProps extends StyleProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  children?: React.ReactNode;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = props => {

  const {
    children,
    borderRadius = "5px",
    backgroundColor = "rgba(0, 0, 255, 0.4)",
    loading,
  } = props;

  return (
    <ButtonContainer
      opacity={0.9}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      height="35px"
      padding="0px 10px"
      boxShadow="0px 0px 5px grey"
      border="none"
      color="white"
      {...props}
    >
      {!loading && children}
      {loading && 'loading...'}
    </ButtonContainer>
  )
}