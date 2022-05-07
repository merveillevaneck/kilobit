import React from 'react';
import styled from 'styled-components';
import { view, text, ViewProps, TextProps } from './compositions';

const View = styled.div<ViewProps>(
  view
);

const Text = styled.p<TextProps>(
  text
);

export function BasicView() {
  return <View
    background="rgba(100, 15, 55, 0.4)"
    borderRadius="10px"
    width="200px"
    height="200px"
    display="flex"
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
  >
    <Text color="white" fontSize="18px" textAlign="center">KiloLab</Text>
  </View>
}
