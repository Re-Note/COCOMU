import styled from '@emotion/styled';

const RadioContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RadioOuter = styled.div<{ checked: boolean }>`
  height: 1.8rem;
  aspect-ratio: 1/1;
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadioInner = styled.div<{ checked: boolean }>`
  height: 60%;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme.color.primary[400]};
  border-radius: 50%;

  opacity: ${({ checked }) => (checked ? '1' : '0')};
  transition: all 0.2s ease;
`;

const HiddenRadio = styled.input`
  clip-path: inset(50%);

  width: 1px;
  height: 1px;

  overflow: hidden;
  position: absolute;
`;

const S = {
  RadioContainer,
  RadioOuter,
  RadioInner,
  HiddenRadio,
};

export default S;
