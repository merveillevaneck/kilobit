import React, {useMemo} from 'react';
import styled, {StyledProps} from 'styled-components';
import {View, ViewProps, animation} from '@kilo-lab/web-design.compositions';

interface AnimationProps {
  name?: string;
  duration?: string;
  timingFunction?: string;
  delay?: string;
  iterationCount?: string;
  direction?: string;
  fillMode?: string;
  playState?: string;
}

interface AnimatedBubbleProps extends ViewProps, AnimationProps {}

export const AnimatedBubble = styled(View)<ViewProps & {timing: string}>`
  animation: 
  breathing 
  4s
  ease-in-out
  infinite normal;
  @-webkit-keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  50% {
    -webkit-tranform: scale(1);
    transform: scale(1);
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
    transform: scale(0.8);
  }
  50% {
    -webkit-tranform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.8);
  }
}
`

export interface BubbleProps extends 
  Omit<ViewProps, 'width' | 'height'> {
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
    <View
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
    </View>
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