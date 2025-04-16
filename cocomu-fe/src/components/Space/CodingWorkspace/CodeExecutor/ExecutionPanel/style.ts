import styled from '@emotion/styled';

const Container = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

const TabList = styled.div`
  display: flex;
  height: 4rem;

  background-color: ${({ theme }) => theme.color.gray[200]};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};
`;

const Tab = styled.div<{ select: boolean }>`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.font.common.defaultAccent};
  color: ${({ select, theme }) => (select ? `${theme.color.primary[300]}` : `${theme.color.gray[800]}`)};
  border-right: 1px solid ${({ theme }) => theme.color.gray[600]};
  padding: 0.6rem 4rem;

  cursor: pointer;
`;

const Runner = styled.textarea`
  flex: 1;

  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[950]};
  background-color: ${({ theme }) => theme.color.gray[100]};

  padding: 1.2rem 2rem;
  resize: none;
  border: none;
  outline: none;

  ::placeholder {
    ${({ theme }) => theme.font.common.default};
    color: ${({ theme }) => theme.color.gray[700]};
  }
`;

const RunnerResult = styled.div`
  flex: 1;

  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[950]};
  background-color: ${({ theme }) => theme.color.gray[100]};

  padding: 1.2rem 2rem;
  resize: none;
  border: none;
  outline: none;

  ::placeholder {
    ${({ theme }) => theme.font.common.default};
    color: ${({ theme }) => theme.color.gray[700]};
  }
`;

const S = {
  Container,
  TabList,
  Tab,
  Runner,
  RunnerResult,
};

export default S;
