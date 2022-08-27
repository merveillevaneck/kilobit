import React from 'react';
import { Bubble } from './bubble';

export const BasicBubble = () => {
  return (
    <Bubble background="lightblue" radius={50} margin="10px 0" />
  );
}

export const Breathing = () => {
  return (
    <Bubble breathe background="lightblue" radius={50} margin="10px 0" />
  );
}
