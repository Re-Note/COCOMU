import styled from '@emotion/styled';

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

const S = {
  Header,
  IconWrapper,
  DropdownList,
};

export default S;
