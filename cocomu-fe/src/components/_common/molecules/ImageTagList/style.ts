import styled from '@emotion/styled';

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0.5rem;

  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const S = {
  ListContainer,
};

export default S;
