import '@emotion/react';
import { light } from '@styles/color';
import typography from '@styles/font';

declare module '@emotion/react' {
  export interface Theme {
    mode: 'light' | 'dark';
    color: typeof light;
    font: typeof typography;
  }
}
