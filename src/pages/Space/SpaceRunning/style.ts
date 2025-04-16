import styled from '@emotion/styled';

interface sizeStyleProps {
  height?: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CodingContainer = styled.div<sizeStyleProps>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: ${({ height }) => `${height}%` || '70%'};

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  user-select: none;
`;

const MonacoContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: auto;
`;
const ButtonWrapper = styled.div`
  display: flex;
  & > :first-of-type {
    margin-right: 2rem;
  }
`;

const S = { Container, CodingContainer, MonacoContainer, ButtonWrapper };

export default S;
