import styled from '@emotion/styled';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 11.8rem;

  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 16px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.3rem;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 5.3rem;
  column-gap: 4.8rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 23px;
`;

const S = {
  Container,
  Section,
  InputWrapper,
  ButtonWrapper,
};

export default S;
