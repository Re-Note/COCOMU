import styled from '@emotion/styled';

const TestCaseItem = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
`;

const Input = styled.textarea<{ remove?: boolean }>`
  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[900]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 0.8rem;

  width: 80%;
  height: 4rem;
  resize: none;
  padding: 0.6rem ${({ remove }) => (remove ? '4rem' : '2.4rem')};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary[400]};
  }
`;

const Output = styled.textarea`
  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[900]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 0.8rem;

  width: 50%;
  height: 4rem;
  resize: none;
  padding: 0.6rem 2.4rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary[400]};
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  left: 1.5%;
`;

const S = {
  TestCaseItem,
  Input,
  Output,
  RemoveButton,
};

export default S;
