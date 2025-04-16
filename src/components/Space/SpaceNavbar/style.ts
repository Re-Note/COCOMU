import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.color.gray[200]};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};

  padding: 1rem 4.6rem;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4.6rem;
`;

const Name = styled.div`
  ${({ theme }) => theme.font.heading[200]};
  color: ${({ theme }) => theme.color.gray[950]};

  white-space: nowrap;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5.6rem;
`;

const S = {
  Container,
  LeftSection,
  Name,
  RightSection,
};

export default S;
