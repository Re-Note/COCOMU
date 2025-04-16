import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

type ProfileImageSize = 'x_sm' | 'sm' | 'md' | 'lg';

export interface ProfileImageStyleProps {
  size?: ProfileImageSize;
  border?: boolean;
}

const containerSizeStyles = {
  x_sm: css`
    width: 3.2rem;
    height: 3.2rem;
  `,
  sm: css`
    width: 3.6rem;
    height: 3.6rem;
  `,
  md: css`
    width: 4.8rem;
    height: 4.8rem;
  `,
  lg: css`
    width: 12.5rem;
    height: 12.5rem;
  `,
};

const uploadButtonSizeStyles = {
  sm: css`
    padding: 0.1rem;
    bottom: 0rem;
    font-size: 0.6rem;
  `,
  md: css`
    padding: 0.2rem;
    bottom: 0rem;
    font-size: 0.8rem;
  `,
  lg: css`
    padding: 0.4rem;
    bottom: 1rem;
    font-size: 1.6rem;
  `,
};

const uploadProfileImgeContainer = (theme: Theme) => css`
  padding: 0.1rem;

  background: ${theme.color.gray[50]};
  border: 1px solid ${theme.color.gray[500]};
`;

const ProfileImageContainer = styled.div<ProfileImageStyleProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  ${({ size }) => containerSizeStyles[size]}

  ${({ border, theme }) => border && uploadProfileImgeContainer(theme)};
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;

  object-fit: cover;
  object-position: center;
`;

const UploadButton = styled.button<ProfileImageStyleProps>`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  right: 0;

  color: ${({ theme }) => theme.color.gray[50]};
  background: ${({ theme }) => theme.color.primary[300]};

  border-radius: 50%;

  ${({ size }) => uploadButtonSizeStyles[size]}
`;

const S = {
  ProfileImageContainer,
  ProfileImage,
  UploadButton,
};

export default S;
