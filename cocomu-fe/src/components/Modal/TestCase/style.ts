import styled from '@emotion/styled';

const Container = styled.div`
  padding: 1.4rem 2.2rem 3rem 2.2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Body = styled.div`
  width: 70rem;
  max-height: 16rem;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;

  margin-top: 2.1rem;
`;

const S = {
  Container,
  Header,
  Body,
  Footer,
};

export default S;
