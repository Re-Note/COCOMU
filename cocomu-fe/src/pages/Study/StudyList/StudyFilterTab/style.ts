import styled from '@emotion/styled';

const FilterTabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  max-width: 100%;
`;

const S = {
  FilterTabContainer,
  DropdownWrapper,
};

export default S;
