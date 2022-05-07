import { CSSProperties, useMemo } from 'react';
import {DefaultTheme, useTheme} from 'styled-components';

export type Styles = {
  [style: string]: CSSProperties;
}

export function useStyles(makeStyles: (theme?: DefaultTheme) => Styles) {
  const theme = useTheme();
  return useMemo(() => makeStyles(theme), [makeStyles, theme]);
}
