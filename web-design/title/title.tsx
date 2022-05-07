import styled from 'styled-components';
import {text, TextProps} from '@kilo-lab/web-design.compositions';

export { TextProps as TitleProps };

export const Title = styled.h3<TextProps>(
  {
    fontFamily: 'Helvetica',
  },
  text
);