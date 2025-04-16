import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type TagColor = 'primary' | 'secondary' | 'analogous' | 'triadic' | 'gray';

export interface TagStyleProps {
  color: TagColor;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  ${theme.font.common.smallAccent}
  padding: 0.1rem 0.9rem;
  border-radius: 1.2rem;
  width: fit-content;
  min-width: 6.5rem;
  height: 2.5rem;
`;

const colorStyles: { [key in TagColor]: (theme: Theme) => SerializedStyles } = {
  primary: (theme: Theme) => css`
    color: ${theme.color.primary[800]};
    background-color: ${theme.color.primary[50]};
  `,
  secondary: (theme: Theme) => css`
    color: ${theme.color.secondary[800]};
    background-color: ${theme.color.secondary[50]};
  `,
  analogous: (theme: Theme) => css`
    color: ${theme.color.analogous[800]};
    background-color: ${theme.color.analogous[50]};
  `,
  triadic: (theme: Theme) => css`
    color: ${theme.color.triadic[800]};
    background-color: ${theme.color.triadic[50]};
  `,
  gray: (theme: Theme) => css`
    color: ${theme.color.gray[800]};
    background-color: ${theme.color.gray[200]};
  `,
};

const Tag = styled.div<TagStyleProps>`
  ${({ theme }) => commonStyles(theme)}
  ${({ color, theme }) => colorStyles[color](theme)}
`;

const S = {
  Tag,
};

export default S;
