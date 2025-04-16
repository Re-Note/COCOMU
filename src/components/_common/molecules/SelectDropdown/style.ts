import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 14rem;
  user-select: none;
`;

const Header = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;

  height: 3.6rem;
  border: 1px solid ${({ theme, isOpen }) => (isOpen ? theme.color.gray[800] : theme.color.gray[600])};
  border-radius: 3.2rem;
  padding: 0.6rem 1.1rem 0.6rem 2rem;
  cursor: pointer;
`;

const SelectedText = styled.div`
  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[900]};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const S = {
  Container,
  Header,
  SelectedText,
};

export default S;
