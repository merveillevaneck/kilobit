import React from 'react';
import {DefaultTheme, ThemeProvider, useTheme} from 'styled-components';
import {View} from '@kilo-lab/web-design.compositions';
import {Title} from '@kilo-lab/web-design.title';
import {Theme} from './theme';
import { useStyles } from './use-styles';

const makeStyles = (theme: DefaultTheme) => ({
  view: {
    background: theme.colors.background,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
  },
  title: {
    color: theme.colors.primary,
    margin: '5px'
  }
})

const StyledComponent = () => {
  const theme = useTheme();
  const styles = useStyles(makeStyles);
  return (
    <View style={styles.view}>
      <Title style={styles.title}>KiloLab</Title>
    </View>
  )
}

export const BasicUseStyles = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StyledComponent />
    </ThemeProvider>
  );
};
