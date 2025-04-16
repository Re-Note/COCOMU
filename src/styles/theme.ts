import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { dark, light } from '@styles/color';
import typography from '@styles/font';

const mode: 'light' | 'dark' = 'light';

const muiTheme = createTheme();

export const theme: Theme = {
  ...muiTheme,
  mode,
  color: mode === 'light' ? light : dark,
  font: typography,
};
