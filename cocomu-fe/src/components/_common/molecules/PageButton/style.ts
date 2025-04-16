import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Pagination from '@mui/material/Pagination';

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': css`
    ${theme.font.common.block};
    color: ${theme.color.gray[950]};
    background-color: ${theme.color.gray[50]};
    margin: 0 5px;

    &:hover {
      background-color: ${theme.color.gray[200]};
    }

    &.Mui-selected {
      color: ${theme.color.gray[950]};
      background-color: ${theme.color.primary[200]};
    }
  `,
}));

const PaginationNavButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  ${({ theme }) => theme.font.common.block};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const S = {
  StyledPagination,
  PaginationNavButton,
};

export default S;
