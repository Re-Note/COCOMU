import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 1rem;

  background: ${({ theme }) => theme.color.gray[100]};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};
`;

const ContainerLeft = styled.div`
  display: flex;
  align-items: center;

  * {
    margin-left: 1rem;
  }
`;

const ItemTitle = styled.div`
  ${({ theme }) => theme.font.common.default};
`;

const ItemInfo = styled.div`
  display: flex;
  ${({ theme }) => theme.font.common.small};
`;

const ContainerRight = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1rem;

  ${({ theme }) => theme.font.common.default};
`;

const Dot = styled.span<{ status: boolean }>`
  width: 1rem;
  height: 1rem;

  border-radius: 50rem;
  margin-left: 1rem;

  background: ${({ status, theme }) => (status ? theme.color.analogous[700] : theme.color.triadic[700])};
`;

const S = {
  Container,
  ContainerLeft,
  ItemTitle,
  ItemInfo,
  ContainerRight,
  Dot,
};

export default S;
