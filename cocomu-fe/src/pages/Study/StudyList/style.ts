import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding: 60px 16px;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 3.4rem;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const S = {
  Container,
  Body,
  Footer,
};

export default S;
