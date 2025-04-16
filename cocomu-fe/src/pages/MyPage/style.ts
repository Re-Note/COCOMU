import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.3rem;

  padding: 60px 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.2rem;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 4rem;
`;

const UserName = styled.input`
  ${({ theme }) => theme.font.heading[600]};
  color: ${({ theme }) => theme.color.gray[950]};

  border: 1px solid ${({ theme }) => theme.color.gray[400]};
  border-radius: 10px;
  outline: none;

  padding: 1.3rem;

  &:disabled {
    border: none;
    background-color: ${({ theme }) => theme.color.gray[50]};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  height: 4.2rem;
`;

const S = {
  Container,
  Header,
  UserWrapper,
  UserName,
  ButtonWrapper,
};

export default S;
