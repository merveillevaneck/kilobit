import React from 'react';
import {Center} from '@kilo-lab/web-design.center';
import { Bubble } from './bubble';

export const BasicBubble = () => {
  return (
    <Center>
      <Bubble background="lightblue" radius={50} margin="10px 0" />
    </Center>
  );
}

export const Breathing = () => {
  return (
    <Center>
      <Bubble breathe background="lightblue" radius={50} margin="10px 0" />
    </Center>
  );
}
