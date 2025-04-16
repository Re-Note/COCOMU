import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'white' | 'primary' | 'secondary' | 'analogous' | 'triadic';
export type ButtonShape = 'default' | 'round';
export type ButtonBorderColor = 'primary' | 'triadic';

export interface ButtonStyleProps {
  size: ButtonSize;
  color: ButtonColor;
  shape?: ButtonShape;
  borderColor?: ButtonBorderColor;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.3rem;
  ${theme.font.heading[100]};
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

const sizeStyles = {
  sm: (theme: Theme) => css`
    ${theme.font.common.default}
    padding: 0.35rem 2.2rem;
    width: fit-content;
    min-width: 10.3rem;
  `,
  md: (theme: Theme) => css`
    ${theme.font.common.default}
    padding: 0.7rem 3.3rem;
    width: fit-content;
    min-width: 10.3rem;
  `,
  lg: (theme: Theme) => css`
    ${theme.font.heading[100]};
    padding: 1.1rem 2.4rem;
    width: fit-content;
    min-width: 13.2rem;
  `,
};

const colorStyles: { [key in ButtonColor]: (theme: Theme, borderColor?: ButtonBorderColor) => SerializedStyles } = {
  white: (theme: Theme, borderColor = 'primary') => css`
    color: ${borderColor === 'triadic' ? theme.color.triadic[400] : theme.color.primary[300]};
    background-color: ${theme.color.gray[50]};
    border: 1px solid ${borderColor === 'triadic' ? theme.color.triadic[400] : theme.color.primary[300]};
  `,
  primary: (theme: Theme) => css`
    color: ${theme.color.gray[50]};
    background-color: ${theme.color.primary[300]};
    border: 1px solid ${theme.color.primary[300]};
  `,
  secondary: (theme: Theme) => css`
    color: ${theme.color.gray[50]};
    background-color: ${theme.color.secondary[300]};
    border: 1px solid ${theme.color.secondary[300]};
  `,
  analogous: (theme: Theme) => css`
    color: ${theme.color.gray[50]};
    background-color: ${theme.color.analogous[300]};
    border: 1px solid ${theme.color.analogous[300]};
  `,
  triadic: (theme: Theme) => css`
    color: ${theme.color.gray[50]};
    background-color: ${theme.color.triadic[400]};
    border: 1px solid ${theme.color.triadic[400]};
  `,
};

const shapeStyles = (shape: ButtonShape = 'default') => css`
  border-radius: ${shape === 'round' ? '3.2rem' : '1rem'};
`;

const Button = styled.button<ButtonStyleProps>`
  ${({ theme }) => commonStyles(theme)}
  ${({ size, theme }) => sizeStyles[size](theme)}
  ${({ color, theme, borderColor }) => colorStyles[color](theme, borderColor ?? 'primary')}
  ${({ shape }) => shapeStyles(shape)}
`;

const S = {
  Button,
};

export default S;
