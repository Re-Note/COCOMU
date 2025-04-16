import styled from '@emotion/styled';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Label = styled.label<{ disabled: boolean }>`
  ${({ theme }) => theme.font.common.block};
  color: ${({ theme, disabled }) => (disabled ? theme.color.gray[800] : theme.color.gray[950])};
`;

const Input = styled.input<{ isError: boolean }>`
  width: 100%;

  color: ${({ theme }) => theme.color.gray[950]};
  background-color: ${({ theme }) => theme.color.gray[50]};

  ${({ theme }) => theme.font.common.block};
  border: 1px solid ${({ theme, isError }) => (isError ? theme.color.triadic[400] : theme.color.gray[600])};
  border-radius: 0.8rem;
  padding: 1.35rem 1.8rem;
  outline: none;

  &::placeholder {
    ${({ theme }) => theme.font.common.block};
    color: ${({ theme }) => theme.color.gray[700]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray[200]};
    border-color: ${({ theme }) => theme.color.gray[500]};
  }

  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
`;

const ErrorText = styled.p`
  ${({ theme }) => theme.font.common.small};
  color: ${({ theme }) => theme.color.triadic[400]};
`;

const S = {
  InputContainer,
  InputWrapper,
  Label,
  Input,
  Icon,
  ErrorText,
};

export default S;
