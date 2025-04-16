import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  padding: 6.6rem 15rem 6.2rem 15rem;
`;

const Description = styled.p`
  ${({ theme }) => theme.font.heading[300]};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const Instruction = styled.p`
  ${({ theme }) => theme.font.heading[500]};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: center;
  gap: 1.3rem;

  height: 4.2rem;
  margin-top: 1rem;
`;

const S = { Container, Description, Instruction, ButtonWrapper };
export default S;
