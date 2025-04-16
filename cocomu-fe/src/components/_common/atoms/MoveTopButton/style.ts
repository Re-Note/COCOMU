import styled from '@emotion/styled';

export const ScrollButton = styled.button`
  position: fixed;
  width: 6rem;
  height: 6rem;
  right: 5%;
  bottom: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;

  border-radius: 100rem;
  border: 2px solid ${({ theme }) => theme.color.primary[600]};
  background-color: ${({ theme }) => theme.color.gray[100]};
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[50]};
    transform: scale(1.1, 1.1);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -0.6rem;
`;

export const ButtonText = styled.span`
  ${({ theme }) => theme.font.heading[50]};
  color: ${({ theme }) => theme.color.primary[600]};
  margin-top: -0.4rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

const S = {
  ScrollButton,
  IconContainer,
  ButtonText,
};

export default S;
