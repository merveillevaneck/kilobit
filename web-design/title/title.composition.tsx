import React from 'react';
import { Title } from './title';

export const BasicTitle = () => {
  return (
    <Title>hello world!</Title>
  );
}

export const CustomTitle = () => {
  return (
    <Title fontSize="16px" color="rgba(255, 67, 135, 0.9)" fontFamily="Sans">
      stylable title
    </Title>
  )
}
