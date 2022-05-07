import React from 'react';
import { Title } from './title';
import { Center } from '@kilo-lab/web-design.center';

export const BasicTitle = () => {
  return (
    <Center>
      <Title color="rgba(255, 67, 1 35, 0.9)">hello world!</Title>
    </Center>
  );
}

export const CustomTitle = () => {
  return (
    <Center>
      <Title fontSize="16px" color="rgba(255, 67, 135, 0.9)" fontFamily="Sans">
        Supporting Massive Ideas
      </Title>
    </Center>
  )
}
