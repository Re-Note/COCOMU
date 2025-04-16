import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type ToggleButtonSize = 'sm' | 'md' | 'lg';
export type ToggleButtonShape = 'default' | 'round';

export interface ToggleButtonStyleProps {
  size?: ToggleButtonSize;
  shape?: ToggleButtonShape;
  isActive?: boolean;
}

const commonStyles = (theme: Theme, isActive?: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.font.heading[100]};
  white-space: nowrap;
  user-select: none;
  color: ${isActive ? theme?.color.primary[500] : theme?.color.gray[900]};
  border: 1px solid ${isActive ? theme?.color.primary[500] : theme?.color.gray[600]};
`;

const sizeStyles = {
  sm: (theme: Theme) => css`
    ${theme.font.common.default}
    padding: 0.15rem 2.2rem;
    width: fit-content;
    min-width: 9rem;
  `,
  md: (theme: Theme) => css`
    ${theme.font.common.default}
    padding: 0.55rem 2.2rem;
    width: fit-content;
    min-width: 10rem;
  `,
  lg: (theme: Theme) => css`
    ${theme.font.heading[100]};
    padding: 0.82rem 2.4rem;
    width: fit-content;
    min-width: 12rem;
  `,
};

const shapeStyles = (shape: ToggleButtonShape = 'default') => css`
  border-radius: ${shape === 'round' ? '3.2rem' : '1.1rem'};
`;

const ToggleButton = styled.button<ToggleButtonStyleProps>`
  ${({ theme, isActive }) => commonStyles(theme, isActive)}
  ${({ size = 'md', theme }) => sizeStyles[size](theme)}
    ${({ shape }) => shapeStyles(shape)}
`;

const S = {
  ToggleButton,
};

export default S;
