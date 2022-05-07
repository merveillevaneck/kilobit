import React from 'react';
import {Title, TitleProps} from '@kilo-lab/web-design.title';
import styled from 'styled-components';

import {view, ViewProps} from '@kilo-lab/web-design.compositions';

export const TitleGraphicContainer = styled.div<Omit<ViewProps, 'color'>>(
  view,
);

export interface TitleGraphicProps extends ViewProps {
  image: React.ReactNode;
  title: React.ReactNode;
  _title: TitleProps;
}

export const TitleGraphic: React.FC<TitleGraphicProps> = props => {
  
  const {
    image,
    title,
    _title = {},
    ...rest
  } = props;

  return (
    <TitleGraphicContainer
      width="100%"
      minHeight="200px"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-start"
      {...rest}>
      {image}
      { title && <Title fontSize={32} color="black" {..._title}>{title}</Title>}
    </TitleGraphicContainer>
  );
}
