import React from 'react';
import styled from 'styled-components';
import { Text, View } from './compositions';

export function BasicView() {
  return <View
    background="rgba(100, 15, 55, 0.4)"
    borderRadius="10px"
    width="100%"
    height="100%"
    display="flex"
    flexDirection="row"
    justifyContent="center"
    alignItems="center">
    <Text margin="5px" color="white" fontSize="18px" textAlign="center">KiloLab</Text>
  </View>
}

export function BasicText() {
  return <View
    width="100%"
    display="flex"
    flexDirection="row"
    justifyContent="center"
    alignItems="center">
    <Text color="rgba(100, 50, 150, 0.6)" fontSize="18px" textAlign="center">KiloLab</Text>
  </View>
}