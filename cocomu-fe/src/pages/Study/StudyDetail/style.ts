import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  padding: 60px 16px 0 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.p`
  ${({ theme }) => theme.font.heading[600]};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const ButtonWrapper = styled.div`
  width: 19.5rem;
`;

const S = {
  Container,
  Header,
  Name,
  ButtonWrapper,
};

export default S;
