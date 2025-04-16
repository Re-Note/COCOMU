import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 2.5rem;
  background: ${({ theme }) => theme.color.gray[50]};
  padding: 2.5rem 6rem;
  cursor: pointer;

  ${(props) =>
    props.role === 'LEADER' &&
    `
    border: 2px solid ${props.theme.color.primary[500]};
    background-color: ${props.theme.color.primary[50]};
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  `}

  width: 100%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 9rem;
`;

const Role = styled.span`
  ${({ theme }) => theme.font.heading[100]};
  color: ${(props) => (props.role === 'LEADER' ? props.theme.color.primary[900] : props.theme.color.gray[900])};
  display: flex;
  align-items: center;

  width: fit-content;
  white-space: nowrap;
`;

const Text = styled.span`
  ${({ theme }) => theme.font.heading[100]};
  display: flex;
  align-items: center;

  width: fit-content;
  white-space: nowrap;

  @media (max-width: 980px) {
    display: none;
  }
`;

const S = {
  CardContainer,
  Info,
  Role,
  Text,
};

export default S;
