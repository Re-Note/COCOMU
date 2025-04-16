import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

const Label = styled.p`
  ${({ theme }) => theme.font.common.block};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const S = {
  Container,
  Label,
};

export default S;
