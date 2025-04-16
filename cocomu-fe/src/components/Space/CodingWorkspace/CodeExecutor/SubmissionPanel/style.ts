import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  background: ${({ theme }) => theme.color.gray[50]};

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4rem;

  background-color: ${({ theme }) => theme.color.gray[200]};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};

  ${({ theme }) => theme.font.common.default};
`;

const HeaderResultLeft = styled.div`
  display: flex;

  margin-left: 2rem;

  & > :last-of-type {
    margin-left: 1rem;
  }
`;

const HeaderResultRight = styled.div<{ status: boolean }>`
  margin-right: 2rem;
  color: ${({ status, theme }) => (status ? theme.color.analogous[700] : theme.color.triadic[700])};
`;

const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const S = {
  Container,
  Header,
  HeaderResultLeft,
  HeaderResultRight,
  LoadingContainer,
};

export default S;
