import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.color.gray[200]};
  border-top: 1px solid ${({ theme }) => theme.color.gray[600]};

  padding: 1rem 4.6rem;
`;

const TestCaseButton = styled.div`
  width: 23rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.4rem;
`;

const S = {
  Container,
  TestCaseButton,
  ButtonWrapper,
};

export default S;
