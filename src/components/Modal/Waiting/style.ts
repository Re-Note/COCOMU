import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 8.4rem 9.3rem;
`;

const Description = styled.div`
  ${({ theme }) => theme.font.heading[300]};
  color: ${({ theme }) => theme.color.gray[700]};

  margin-bottom: 2rem;
`;

const Instruction = styled.div`
  ${({ theme }) => theme.font.heading[500]};
  color: ${({ theme }) => theme.color.gray[950]};

  margin-bottom: 4rem;
`;

const S = {
  Container,
  Description,
  Instruction,
};

export default S;
