import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 100%;
`;

const Description = styled.p`
  ${({ theme }) => theme.font.common.defaultAccent};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  width: 100%;
`;

const S = {
  Container,
  Description,
  ItemWrapper,
};

export default S;
