import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex: 1;

  overflow: hidden;
`;

const CodeSection = styled.div<{ width?: number }>`
  width: ${({ width }) => `${width}%` || '40%'};
`;

const S = {
  Container,
  CodeSection,
};

export default S;
