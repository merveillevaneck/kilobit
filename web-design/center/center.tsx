import React from 'react';
import styled from 'styled-components';
import { view, ViewProps } from '@kilo-lab/web-design.compositions';

export interface CenterProps extends ViewProps {}

export const Center = styled.div<ViewProps>(
  {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view
);
