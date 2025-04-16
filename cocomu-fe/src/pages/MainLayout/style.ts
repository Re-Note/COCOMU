import styled from '@emotion/styled';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 1300px) {
    max-width: 980px;
  }

  @media (max-width: 980px) {
    max-width: 650px;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const S = {
  MainContainer,
  Container,
};

export default S;
