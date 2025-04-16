import styled from '@emotion/styled';
import { css, SerializedStyles, Theme } from '@emotion/react';

export type UserTabColor = 'primary' | 'secondary' | 'analogous' | 'triadic';

const textColorStyles: { [key in UserTabColor]: (theme: Theme) => SerializedStyles } = {
  primary: (theme: Theme) => css`
    color: ${theme.color.primary[700]};
  `,
  secondary: (theme: Theme) => css`
    color: ${theme.color.secondary[700]};
  `,
  analogous: (theme: Theme) => css`
    color: ${theme.color.analogous[700]};
  `,
  triadic: (theme: Theme) => css`
    color: ${theme.color.triadic[700]};
  `,
};

const backgroundColorStyles: { [key in UserTabColor]: (theme: Theme) => SerializedStyles } = {
  primary: (theme: Theme) => css`
    background-color: ${theme.color.primary[700]};
  `,
  secondary: (theme: Theme) => css`
    background-color: ${theme.color.secondary[700]};
  `,
  analogous: (theme: Theme) => css`
    background-color: ${theme.color.analogous[700]};
  `,
  triadic: (theme: Theme) => css`
    background-color: ${theme.color.triadic[700]};
  `,
};

const UserTab = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: fit-content;
  padding: 1rem 4rem;

  background: ${({ theme }) => theme.color.gray[50]};
  border-right: 1px solid ${({ theme }) => theme.color.gray[600]};

  cursor: pointer;
  border-bottom: ${({ isSelected, theme }) => (isSelected ? `3px solid ${theme.color.analogous[300]}` : 'none')};
`;

const UserName = styled.span<{ color: UserTabColor }>`
  ${({ theme }) => theme.font.common.defaultAccent}
  ${({ color, theme }) => textColorStyles[color](theme)}
`;

const Dot = styled.span<{ color: UserTabColor }>`
  ${({ color, theme }) => backgroundColorStyles[color](theme)}

  width: 1rem;
  height: 1rem;
  border-radius: 50rem;
`;

const S = { UserTab, UserName, Dot };

export default S;
