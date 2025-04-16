import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

export type IconSize = 'sm' | 'md';
export type IconColor = '50' | '700' | '950';

export interface IconStyleProps {
  size: IconSize;
  color: IconColor;
}

const sizeStyle = {
  sm: '1.3rem',
  md: '1.8rem',
};

const colorStyle = {
  50: (theme: Theme) => css`
    color: ${theme.color.gray[50]};
  `,
  700: (theme: Theme) => css`
    color: ${theme.color.gray[700]};
  `,
  950: (theme: Theme) => css`
    color: ${theme.color.gray[950]};
  `,
};

const Icon = styled.div<IconStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ size }) => sizeStyle[size]};
  ${({ color, theme }) => colorStyle[color](theme)};
  cursor: pointer;
`;

const S = {
  Icon,
};

export default S;
