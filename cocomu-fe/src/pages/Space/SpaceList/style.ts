import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-bottom: 8rem;
`;

const SpaceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Sentinel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2px;
`;

const S = {
  Container,
  SpaceListContainer,
  Sentinel,
};

export default S;
