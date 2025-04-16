import styled from '@emotion/styled';

const StepMarker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary[400]};
  ${({ theme }) => theme.font.heading[100]};
  color: ${({ theme }) => theme.color.gray[50]};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const Description = styled.p`
  ${({ theme }) => theme.font.heading[500]};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const S = {
  StepMarker,
  Container,
  Description,
};

export default S;
