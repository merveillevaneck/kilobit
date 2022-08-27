import React, {useMemo} from 'react';
import styled from 'styled-components';
import {
  FlexboxProps,
  BorderProps,
  PositionProps,
  BackgroundProps,
  ZIndexProps,
  ShadowProps,
  OpacityProps,
  LayoutProps,
  SpaceProps,
  position,
  background,
  zIndex,
  shadow,
  opacity,
  layout,
  flexbox,
  border,
  space,
} from 'styled-system';

export const BubbleBase = styled.div(
  position,
  background,
  zIndex,
  shadow,
  opacity,
  layout,
  flexbox,
  border,
  space,
);

export const AnimatedBubble = styled(BubbleBase)`
  animation: breathing 5s ease-in-out infinite normal;
  @-webkit-keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  25% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  60% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}
`

export interface BubbleProps extends 
  FlexboxProps,
  Omit<LayoutProps, 'width' | 'height'>,
  PositionProps,
  BackgroundProps,
  ZIndexProps,
  BorderProps,
  ShadowProps,
  OpacityProps,
  SpaceProps {
  style?: React.CSSProperties;
  breathe?: boolean;
  radius?: number;
}

export const DefaultBubbleRadius = 25;

export const useBubbleDimensions = (radius = DefaultBubbleRadius) => {
  return useMemo(() => {
    const diameter = 2 * radius;
    const borderRadius = 2.5 * radius;
    return {
      width: diameter,
      height: diameter,
      borderRadius,
    };
  }, [radius]);
}

export const Bubble: React.FC<BubbleProps> = props => {

  const {
    style,
    children,
    breathe,
    background = 'rgba(0, 0, 0, 0.4)', 
    boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.7)',
    radius = DefaultBubbleRadius,
    margin = "10px 5px",
    ...rest
  } = props;

  const {
    width,
    height,
    borderRadius
  } = useBubbleDimensions(radius);

  if (!breathe) return (
    <BubbleBase
      style={style}
      width={width}
      height={height}
      background={background}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      margin={margin}
      {...rest}
    >
      {children}
    </BubbleBase>
  )

  return (
    <AnimatedBubble
      style={style}
      width={width}
      height={height}
      background={background}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      margin={margin}
      {...rest}
    >
      {children}
    </AnimatedBubble>
  )
}