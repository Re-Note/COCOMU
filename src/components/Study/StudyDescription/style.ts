import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 140%;
  right: 0%;
  z-index: 1;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 1rem;
  padding: 1rem 0;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

const StudyName = styled.h1`
  ${({ theme }) => theme.font.heading[600]};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const TagContainer = styled.div`
  display: grid;
  align-self: flex-start;
  gap: 3.2rem;

  grid-template-columns: auto 2fr auto 1fr;
`;

const Label = styled.div`
  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const StudyIntro = styled.h2`
  ${({ theme }) => theme.font.heading[400]};
`;

const S = {
  Container,
  Header,
  IconWrapper,
  DropdownList,
  Body,
  StudyName,
  TagContainer,
  Label,
  StudyIntro,
};

export default S;
