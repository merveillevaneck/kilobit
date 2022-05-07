import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { text, TextProps } from '@kilo-lab/web-design.compositions';

export const Text = styled.p<TextProps>(text);
export { TextProps };

