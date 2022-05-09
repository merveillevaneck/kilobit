export interface AnimationProps {
  name?: string;
  duration?: string;
  timingFunction?: string;
  delay?: string;
  iterationCount?: string;
  direction?: string;
  fillMode?: string;
  playState?: string;
  animation?: string | Omit<AnimationProps, 'animation'>;
}
