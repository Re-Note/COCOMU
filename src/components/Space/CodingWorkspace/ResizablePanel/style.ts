import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

const panelStyles = {
  x: (theme: Theme) => css`
    width: 100%;
    height: 1.3rem;
    border-top: 1px solid ${theme.color.gray[600]};
    border-bottom: 1px solid ${theme.color.gray[600]};
  `,
  y: (theme: Theme) => css`
    width: 1.3rem;
    height: 100%;
    border-right: 1px solid ${theme.color.gray[600]};
    border-left: 1px solid ${theme.color.gray[600]};
  `,
};

const buttonStyles = {
  x: css`
    width: 10rem;
    height: 0.5rem;
  `,
  y: css`
    width: 0.5rem;
    height: 10rem;
  `,
};

const ResizablePanel = styled.div<{ direction: 'x' | 'y' }>`
  ${({ direction, theme }) => panelStyles[direction](theme)}

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.gray[50]};
`;

const ResizeButton = styled.div<{ direction: 'x' | 'y' }>`
  ${({ direction }) => buttonStyles[direction]}

  background-color: ${({ theme }) => theme.color.gray[600]};
  border-radius: 20rem;

  cursor: pointer;
`;

const S = {
  ResizablePanel,
  ResizeButton,
};

export default S;
