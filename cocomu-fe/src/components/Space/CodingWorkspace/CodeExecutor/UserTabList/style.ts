import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;

  background: ${({ theme }) => theme.color.gray[100]};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};

  width: 100%;
`;

const S = { Container };

export default S;
