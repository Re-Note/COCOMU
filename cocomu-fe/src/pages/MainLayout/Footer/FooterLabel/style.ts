import styled from '@emotion/styled';

const Label = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const LabelText = styled.div`
  ${({ theme }) => theme.font.heading[100]};
  color: ${({ theme }) => theme.color.gray[800]};
`;

const SmallLabelText = styled.p`
  ${({ theme }) => theme.font.common.small};
  color: ${({ theme }) => theme.color.gray[800]};
`;

const S = {
  Label,
  LabelText,
  SmallLabelText,
};

export default S;
