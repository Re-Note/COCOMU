import styled from '@emotion/styled';
import { keyframes, css, Theme, SerializedStyles } from '@emotion/react';
import { ToastType } from '@stores/useToastStore';

export interface ToastStyleProps {
  type: ToastType;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const progressShrink = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

const typeStyles: { [key in ToastType]: (theme: Theme, shade: number) => SerializedStyles } = {
  default: (theme, shade) => css`
    background-color: ${theme.color.primary[shade]};
  `,
  success: (theme, shade) => css`
    background-color: ${theme.color.analogous[shade]};
  `,
  error: (theme, shade) => css`
    background-color: ${theme.color.triadic[shade]};
  `,
};

const ToastContainer = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;

  width: fit-content;
  min-width: 32rem;
  min-height: 6.4rem;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border-radius: 0.8rem;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2);

  overflow: hidden;
  animation: ${({ visible }) => (visible ? slideIn : slideOut)} 0.5s ease-out forwards;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.4rem 0.8rem 0 0.8rem;
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.color.gray[600]};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.gray[950]};
  }
`;

const ToastContent = styled.div<ToastStyleProps>`
  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[800]};

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;

  padding: 0 1.5rem;
`;

const ProgressBar = styled.div<ToastStyleProps>`
  ${({ type, theme }) => typeStyles[type](theme, 100)}

  width: 100%;
  height: 0.5rem;
`;

const ShrinkBar = styled.div<ToastStyleProps>`
  ${({ type, theme }) => typeStyles[type](theme, 400)}

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.5rem;

  animation: ${progressShrink} 3s linear forwards;
`;

const S = {
  ToastContainer,
  Header,
  Icon,
  ToastContent,
  ProgressBar,
  ShrinkBar,
};

export default S;
