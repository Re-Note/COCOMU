import styled from '@emotion/styled';

const Container = styled.div<{ optionsGap: string | undefined }>`
  display: flex;

  gap: ${({ optionsGap }) => optionsGap};
`;

const S = {
  Container,
};

export default S;
