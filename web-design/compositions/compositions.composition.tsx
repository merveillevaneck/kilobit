import React from 'react';
import { compositions } from './compositions';

export function ReturnsCorrectValue() {
  return <div>{compositions()}</div>;
}
