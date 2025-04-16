import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  width: 100%;
  height: 34rem;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 2px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 3rem;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const Date = styled.span`
  ${({ theme }) => theme.font.common.smallAccent};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ theme }) => theme.font.heading[100]};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const Description = styled.p`
  min-height: 7.2rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
  overflow: hidden;

  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  ${({ theme }) => theme.font.common.smallAccent};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const S = {
  CardContainer,
  Header,
  Date,
  Body,
  Title,
  Description,
  Footer,
  ParticipantInfo,
};

export default S;
