import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type listTextColor = 'gray' | 'black' | 'triadic';
export type listTextSize = 'md' | 'lg';

export interface DropDownItemStyleProps {
  color?: listTextColor;
  size?: listTextSize;
  isSelected?: boolean;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: start;
  white-space: nowrap;
  width: 100%;

  &:hover {
    background-color: ${theme.color.primary[50]};
    cursor: pointer;
  }
`;

const sizeStyles = {
  md: (theme: Theme, isSelected: boolean) => css`
    ${isSelected ? theme.font.common.defaultAccent : theme.font.common.default};
    padding: 0.4rem 2rem;
  `,
  lg: (theme: Theme, isSelected: boolean) => css`
    ${isSelected ? theme.font.heading[100] : theme.font.common.defaultAccent};
    padding: 0.5rem 2.2rem;
  `,
};

const colorStyles = {
  black: (theme: Theme, isSelected: boolean) => css`
    color: ${isSelected ? theme.color.primary[400] : theme.color.gray[950]};
  `,
  gray: (theme: Theme, isSelected: boolean) => css`
    color: ${isSelected ? theme.color.primary[400] : theme.color.gray[800]};
  `,
  triadic: (theme: Theme) => css`
    color: ${theme.color.triadic[800]};
  `,
};

const DropdownItem = styled.div<DropDownItemStyleProps>`
  ${({ theme }) => commonStyles(theme)}
  ${({ size, theme, isSelected }) => sizeStyles[size](theme, isSelected)}
  ${({ color, theme, isSelected }) => colorStyles[color](theme, isSelected)}
`;

const S = {
  DropdownItem,
};

export default S;
