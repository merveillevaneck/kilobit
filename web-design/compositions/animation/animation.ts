import { css, StyledComponentProps } from 'styled-components';
import { AnimationProps } from './types';

const toDash = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

interface AnimationObject extends Omit<AnimationProps, 'animation'> {}

const genProp = (key: keyof AnimationObject) => (props: AnimationObject) => {
  return props[key] ? css`animation-${toDash(key)}: ${props[key]};` : '';
}

export const animationName = genProp('name');
export const animationDuration = genProp('duration');
export const animationTimingFunction = genProp('timingFunction');
export const animationDelay = genProp('delay');
export const animationIterationCount = genProp('iterationCount');
export const animationDirection = genProp('direction');
export const animationFillMode = genProp('fillMode');
export const animationPlayState = genProp('playState');

const animationPropKeys = [
  'name',
  'duration',
  'timingFunction',
  'delay',
  'iterationCount',
  'direction',
  'fillMode',
  'playState',
] as (keyof AnimationProps)[];

export const animationObjectParser = (animationProps: Omit<AnimationProps, 'animation'>) => {
  const values = animationPropKeys.map((key: keyof AnimationProps) => {
    return animationProps[key] ?? '';
  });
  const value = values.reduce((prev: string, curr: string, idx: number) => {
    if (curr === '') return prev;
    return prev + ' ' + curr;
  }, 'animation: ');
  return value + ';'
}

export const animationProp = (props: AnimationProps) => {
  if (!props.animation) return '';
  if (typeof props.animation === 'string') return css``;
  if (typeof props.animation === 'object') return animationObjectParser(props.animation);
  return '';
}