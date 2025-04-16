import styled from '@emotion/styled';

const Header = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray[950]};
  width: 1.8rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 120%;
  left: -420%;
  right: 0;
  z-index: 1;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 0.4rem;
  padding: 0.3rem 0;
`;

const S = {
  Header,
  RightSection,
  DropdownContainer,
  IconContainer,
  DropdownList,
};

export default S;
