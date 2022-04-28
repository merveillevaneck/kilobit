import React from 'react';
import { useDeviceType } from './use-device-type';
import { DEVICES } from './constants';

export const BasicuseDeviceType = () => {
  const device = useDeviceType();

  return (
    <>
      <h1>{device}</h1>
    </>
  );
};
