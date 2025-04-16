import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

const borderStyles = {
  default: (theme: Theme) => `1px solid ${theme.color.gray[600]}`,
  isOpen: (theme: Theme) => `1px solid ${theme.color.primary[400]}`,
  error: (theme: Theme) => `1px solid ${theme.color.triadic[400]}`,
};

const getBorderStyle = (theme: Theme, { isOpen, isError }: { isOpen: boolean; isError: boolean }) => {
  if (isOpen) return borderStyles.isOpen(theme);
  if (isError) return borderStyles.error(theme);
  return borderStyles.default(theme);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  position: relative;
`;

const Label = styled.p`
  color: ${({ theme }) => theme.color.gray[950]};
  ${({ theme }) => theme.font.common.block};
  margin-bottom: 0.1rem;
`;

const InputContainer = styled.div<{ isOpen: boolean; isError: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  height: 5.3rem;
  background-color: ${({ theme }) => theme.color.gray[50]};
  border: ${({ theme, ...props }) => getBorderStyle(theme, props)};
  border-radius: 0.8rem;
  padding: 1rem 2rem;
`;

const SelectedText = styled.p`
  ${({ theme }) => theme.font.common.block};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const Input = styled.input<{ disabled?: boolean }>`
  flex: 1;
  border: none;
  outline: none;

  ${({ theme }) => theme.font.common.block};
  color: ${({ theme }) => theme.color.gray[900]};

  background-color: ${({ disabled, theme }) => (disabled ? theme.color.gray[50] : 'transparent')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  width: 1.3rem;
  height: 1.3rem;

  cursor: pointer;
`;

const ErrorText = styled.p`
  ${({ theme }) => theme.font.common.small};
  color: ${({ theme }) => theme.color.triadic[400]};
`;

const S = {
  Container,
  DropdownContainer,
  Label,
  InputContainer,
  SelectedText,
  Input,
  Icon,
  ErrorText,
};

export default S;
