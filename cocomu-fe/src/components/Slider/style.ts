import styled from '@emotion/styled';

const SliderWrapper = styled.div`
  position: relative;

  width: 100%;
  border-radius: 3rem;
  overflow: hidden;
  text-align: center;
`;

const Slides = styled.div`
  width: 100%;
  display: flex;
  transition: transform 0.2s ease;

  &:focus {
    outline: none;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  border-radius: 3rem;

  object-fit: cover;
`;

const SliderControls = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 2rem;
  gap: 1rem;

  bottom: 3rem;
  right: 0;

  border-radius: 2rem;

  background: ${({ theme }) => theme.color.gray[50]};
  ${({ theme }) => theme.font.common.default}

  transform: translateX(-50%);
`;

const ArrowButton = styled.div`
  background: none;
  border: none;

  cursor: pointer;
`;

const S = {
  Slides,
  SlideImage,
  SliderControls,
  ArrowButton,
  SliderWrapper,
};

export default S;
