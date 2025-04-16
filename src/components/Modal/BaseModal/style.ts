import styled from '@emotion/styled';

const ModalOverlay = styled.dialog`
  justify-content: center;
  align-items: center;
  z-index: 1000;

  border: none;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.color.gray[50]};

  width: fit-content;
  height: fit-content;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: hidden;

  &::backdrop {
    background-color: ${({ theme }) => theme.color.gray[950]};
    opacity: 0.8;
  }
`;

const S = {
  ModalOverlay,
};

export default S;
