import React from 'react'
import styled from 'styled-components';
import {view, ButtonProps as ButtonStyleProps } from '@kilo-lab/web-design.compositions';

const ButtonContainer = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  box-shadow: none;
  ${view}
`;
export interface ButtonProps extends ButtonStyleProps {
  children?: React.ReactNode;
  /** boolean prop that can be used to render a default loading state */
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {

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