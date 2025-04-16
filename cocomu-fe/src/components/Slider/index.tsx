import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import S from './style';
import { PrevArrow, NextArrow } from './Arrow';

export default function Slide({ images, autoplay = true, speed = 500 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    speed,
    infinite: true,
    autoplay,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <S.SliderWrapper>
      <Slider
        {...settings}
        ref={sliderRef}
      >
        {images.map((url, index) => (
          <S.Slides key={url}>
            <S.SlideImage
              src={url}
              alt={`Slide ${index + 1}`}
            />
          </S.Slides>
        ))}
      </Slider>

      <S.SliderControls>
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <span>{`${currentSlide + 1} | ${images.length}`}</span>
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />
      </S.SliderControls>
    </S.SliderWrapper>
  );
}

Slide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoplay: PropTypes.bool,
  speed: PropTypes.number,
};
