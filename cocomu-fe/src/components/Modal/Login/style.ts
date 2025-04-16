import styled from '@emotion/styled';
import { css, SerializedStyles, Theme } from '@emotion/react';

export type ButtonType = 'google' | 'github' | 'kakao';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  padding: 0 5.6rem 3rem 5.6rem;
`;

const Logo = styled.img`
  width: 14rem;
  height: auto;
`;

const WelcomeText = styled.p`
  ${({ theme }) => theme.font.heading[600]};
  color: ${({ theme }) => theme.color.gray[950]};
  line-height: 1.2;

  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const typeStyles: { [key in ButtonType]: (theme: Theme) => SerializedStyles } = {
  google: (theme: Theme) => css`
    border: 1px solid ${theme.color.gray[600]};
    background-color: ${theme.color.gray[50]};
    color: ${theme.color.gray[950]};
  `,
  github: (theme: Theme) => css`
    border: 1px solid ${theme.color.gray[950]};
    background-color: ${theme.color.gray[950]};
    color: ${theme.color.gray[50]};
  `,
  kakao: (theme: Theme) => css`
    border: 1px solid ${theme.color.secondary[400]};
    background-color: ${theme.color.secondary[400]};
    color: ${theme.color.gray[950]};
  `,
};

const LoginButton = styled.button<{ buttonType: ButtonType }>`
  ${({ theme, buttonType }) => typeStyles[buttonType](theme)};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;

  width: 34.4rem;
  border-radius: 3rem;
  padding: 1.5rem 0;

  cursor: pointer;
`;

const ButtonIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const ButtonLabel = styled.div`
  ${({ theme }) => theme.font.common.defaultAccent};
`;

const S = {
  Container,
  Header,
  Body,
  Logo,
  WelcomeText,
  ButtonWrapper,
  LoginButton,
  ButtonIcon,
  ButtonLabel,
};

export default S;
