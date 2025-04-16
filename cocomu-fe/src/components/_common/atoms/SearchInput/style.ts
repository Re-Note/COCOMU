import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  gap: 1rem;

  width: 25.6rem;
  height: 3.6rem;
  padding: 0.6rem 1.6rem;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 3.2rem;

  user-select: none;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[900]};
  border: none;

  &:focus {
    outline: none;
  }
`;

const S = {
  Container,
  Input,
};

export default S;
