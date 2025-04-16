import styled from '@emotion/styled';

const Option = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

const Label = styled.span`
  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const S = {
  Option,
  Label,
};

export default S;
