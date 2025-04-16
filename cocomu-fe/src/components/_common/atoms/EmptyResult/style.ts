import styled from '@emotion/styled';

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const EmptyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  user-select: none;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const S = {
  EmptyWrapper,
  EmptyContent,
};

export default S;
