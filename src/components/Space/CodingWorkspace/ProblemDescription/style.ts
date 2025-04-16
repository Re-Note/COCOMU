import styled from '@emotion/styled';

const ProblemDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.4rem;

  padding: 2rem;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const ReferenceContainer = styled.div`
  ${({ theme }) => theme.font.common.block};
`;

const S = {
  ProblemDescription,
  ReferenceContainer,
};

export default S;
