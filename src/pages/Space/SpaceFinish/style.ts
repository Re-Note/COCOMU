import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CodingContainer = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
`;

const MonacoContainer = styled.div`
  display: flex;
  height: 100%;
`;

const S = { Container, CodingContainer, MonacoContainer };

export default S;
