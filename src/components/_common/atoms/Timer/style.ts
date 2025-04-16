import styled from '@emotion/styled';

const Timer = styled.div`
  ${({ theme }) => theme.font.heading[200]};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const S = {
  Timer,
};

export default S;
