import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 2.5rem;
  padding: 1.6rem 2.4rem 3rem 2.4rem;

  width: 100%;

  cursor: pointer;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 10rem;
`;

const Text = styled.div`
  ${({ theme }) => theme.font.heading[100]};
  color: ${({ theme }) => theme.color.gray[900]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Date = styled.div`
  ${({ theme }) => theme.font.heading[100]};
  color: ${({ theme }) => theme.color.gray[900]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 980px) {
    display: none;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const S = {
  CardContainer,
  Body,
  Text,
  Date,
  Info,
};

export default S;
