import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

type IconButtonColor = 'none' | 'white';
type IconButtonTextAlign = 'left' | 'center';
type IconButtonShape = 'default' | 'round';

export type IconButtonStyleProps = {
  color?: IconButtonColor;
  align?: IconButtonTextAlign;
  shape?: IconButtonShape;
};

const colorStyles: { [key in IconButtonColor]: (theme: Theme) => SerializedStyles } = {
  none: (theme: Theme) => css`
    background-color: transparent;
    color: ${theme.color.gray[900]};
  `,
  white: (theme: Theme) => css`
    background-color: ${theme.color.gray[50]};
    border: 1px solid ${theme.color.gray[600]};
    color: ${theme.color.gray[900]};

    &:hover {
      background-color: ${theme.color.primary[300]};
      border: 1px solid ${theme.color.primary[300]};
      color: ${theme.color.gray[50]};
    }
  `,
};

const shapeStyles = (shape: IconButtonShape = 'default') => css`
  border-radius: ${shape === 'round' ? '3.2rem' : '1.1rem'};
`;

const IconButtonContainer = styled.div<IconButtonStyleProps>`
  ${({ color, theme }) => colorStyles[color](theme)};
  ${({ theme }) => theme.font.common.default};
  ${({ shape }) => shapeStyles(shape)}

  display: flex;
  justify-content: ${({ align }) => (align === 'center' ? 'center' : 'flex-start')};
  align-items: center;

  width: 100%;

  padding: 0.6rem 2.2rem;
  border-radius: 3.2rem;
  gap: 1.2rem;

  white-space: nowrap;
  cursor: pointer;
`;

const S = {
  IconButtonContainer,
};

export default S;
