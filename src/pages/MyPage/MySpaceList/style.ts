import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-bottom: 8rem;
`;

const SpaceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const S = {
  Container,
  SpaceList,
};

export default S;
