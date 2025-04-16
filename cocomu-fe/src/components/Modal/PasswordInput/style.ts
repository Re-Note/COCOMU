import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.3rem;

  padding: 6.6rem 6.4rem 5.4rem 6.4rem;
  width: 49rem;
`;

const Description = styled.h2`
  ${({ theme }) => theme.font.heading[400]};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 1rem;

  height: 4.2rem;
`;

const S = { Container, Description, ButtonWrapper };
export default S;
