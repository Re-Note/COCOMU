import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

export type AvatarGroupSize = 'sm' | 'md' | 'lg';

const sizeStyle = {
  sm: (theme: Theme) => css`
    margin-left: -0.8rem;

    span {
      padding: 0.1rem 0.3rem;
      ${theme.font.common.extraSmall};
    }
  `,
  md: (theme: Theme) => css`
    margin-left: -1rem;

    span {
      padding: 0.1rem 0.4rem;
      ${theme.font.common.extraSmall};
    }
  `,
  lg: (theme: Theme) => css`
    margin-left: -2.5rem;

    span {
      padding: 0.4rem 0.8rem;
      ${theme.font.common.default};
    }
  `,
};

const AvatarGroupContainer = styled.div<{ size?: AvatarGroupSize }>`
  position: relative;

  display: flex;
  align-items: center;
  width: ${({ size }) => (size === 'sm' ? '12rem' : 'auto')};

  @media (max-width: 980px) {
    display: none;
  }
`;

const ProfileWrapper = styled.div<{ index: number; size: AvatarGroupSize }>`
  position: relative;
  z-index: ${({ index }) => index};

  ${({ size, theme }) => sizeStyle[size](theme)}

  &:first-of-type {
    margin-left: 0;
  }

  &:hover span {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Nickname = styled.span`
  position: absolute;
  left: 50%;
  bottom: -2.5rem;

  width: fit-content;
  max-width: 10rem;

  border-radius: 0.8rem;

  background: ${({ theme }) => theme.color.primary[200]};
  color: ${({ theme }) => theme.color.gray[50]};

  opacity: 0;
  white-space: nowrap;

  transform: translateX(-50%) translateY(1rem);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`;

const S = {
  AvatarGroupContainer,
  ProfileWrapper,
  Nickname,
};

export default S;
