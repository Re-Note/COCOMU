import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TimePicker } from '@mui/x-date-pickers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

const Label = styled.label`
  ${({ theme }) => theme.font.common.block};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const StyledTimePicker = styled(TimePicker)(({ theme }) => ({
  '& .MuiOutlinedInput-root': css`
    background-color: ${theme.color.gray[50]};
    border: 1px solid ${theme.color.gray[600]};
    border-radius: 0.8rem;
    outline: none;

    &.Mui-focused {
      border-color: ${theme.color.primary[300]};
    }
  `,

  '& .MuiOutlinedInput-input': css`
    ${theme.font.common.block};
    color: ${theme.color.gray[950]};
    padding: 1.55rem 1.8rem;
    outline: none;
  `,

  '& .MuiOutlinedInput-notchedOutline': css`
    border: none;
  `,
}));

const S = {
  Container,
  Label,
  StyledTimePicker,
};

export default S;
