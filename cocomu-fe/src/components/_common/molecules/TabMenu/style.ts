import styled from '@emotion/styled';

const TabMenuContainer = styled.div`
  display: flex;
  position: relative;

  border-bottom: 3px solid ${({ theme }) => theme.color.gray[400]};
`;

const TabElement = styled.div<{ isSelected: boolean }>`
  position: relative;
  padding: 1rem 1.5rem;

  ${({ theme }) => theme.font.heading[300]};
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.gray[950] : theme.color.gray[400])};

  cursor: pointer;

  &::after {
    content: '';

    position: absolute;
    bottom: -0.3rem;
    left: 0;
    width: 100%;
    height: 0.3rem;

    background-color: ${({ theme, isSelected }) => (isSelected ? theme.color.primary[300] : 'transparent')};
    z-index: 1;
  }
`;

const S = {
  TabMenuContainer,
  TabElement,
};

export default S;
