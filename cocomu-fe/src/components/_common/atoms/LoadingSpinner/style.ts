import { keyframes, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type LoadingSpinnerColor = 'gray' | 'triadic';

export interface LoadingSpinnerStyleProps {
  delay?: string;
  color?: LoadingSpinnerColor;
}

const blink = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  width: 100%;
`;

const colorStyles = {
  gray: (theme: Theme) => theme.color.gray[600],
  triadic: (theme: Theme) => theme.color.triadic[600],
};

const Dot = styled.div<LoadingSpinnerStyleProps>`
  width: 10px;
  height: 10px;
  background-color: ${({ theme, color }) => colorStyles[color](theme)};
  border-radius: 50%;
  animation: ${blink} 1.2s infinite ease-in-out;
  animation-delay: ${({ delay = '0s' }) => delay};
`;

const S = {
  LoadingSpinner,
  Dot,
};

export default S;
