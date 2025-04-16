import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type DropdownListShape = 'default' | 'round';

export interface DropdownListStyleProps {
  shape?: DropdownListShape;
}

const shapeStyles = (shape: DropdownListShape = 'default') => css`
  border-radius: ${shape === 'round' ? '2rem' : '0.8rem'};
`;

const DropdownList = styled.div<DropdownListStyleProps>`
  position: absolute;
  top: 107%;
  left: 0%;
  z-index: 1;

  width: 100%;
  max-height: 20rem;
  overflow-y: auto;

  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  background-color: ${({ theme }) => theme.color.gray[50]};
  padding: 1rem 0;

  ${({ shape }) => shapeStyles(shape)}
`;

const S = {
  DropdownList,
};

export default S;
