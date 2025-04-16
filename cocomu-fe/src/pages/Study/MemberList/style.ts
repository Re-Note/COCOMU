import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
`;

const Sentinel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2px;
  padding-bottom: 4rem;
`;

const S = {
  Container,
  Sentinel,
};

export default S;
