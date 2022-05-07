import React from 'react';
import { View as HeaderContainer, ViewProps } from '@kilo-lab/web-design.compositions';

export const DEFAULT_HEADER_HEIGHT = 60;

export const HeaderContent = HeaderContainer;

export interface HeaderProps extends ViewProps {
  /**
   * A react element rendering to the right of the header content.
   */
  RightElement?: React.ReactElement;
  /**
   * A react element rendering to the left of the header content.
   */
  LeftElement?: React.ReactElement;
  /**
   * The react node or string to render as the header content.
   */
  title?: React.ReactNode;
  /**
   * The style props of the header content container.
   */
  _headerContent?: ViewProps;
}

export const Header = (props: HeaderProps) => {

  const {children, LeftElement, RightElement, title, height = DEFAULT_HEADER_HEIGHT, _headerContent, ...rest} = props;

  return (
    <HeaderContainer
      width="100%"
      paddingX="10px"
      backgroundColor="rgba(100, 15, 200, 0.6)"
      height={height}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      {...rest}>
      {LeftElement}
      <HeaderContent flex={1} display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" {..._headerContent}>
        {title}
        {children}
      </HeaderContent>
      {RightElement}
    </HeaderContainer>
  );
}

