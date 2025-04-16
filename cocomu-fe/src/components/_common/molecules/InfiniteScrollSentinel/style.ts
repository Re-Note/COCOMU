import styled from '@emotion/styled';

const Sentinel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2px;
`;

const NoMoreDataMessage = styled.p`
  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[700]};

  text-align: center;
`;

const S = {
  Sentinel,
  NoMoreDataMessage,
};

export default S;
