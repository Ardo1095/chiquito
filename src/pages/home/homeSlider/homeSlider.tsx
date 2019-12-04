import React, { FC, useRef } from 'react';
import Slider from 'react-slick';
import './homeSlider.css';
import Slide from './slide';
import SliderRightButton from '../../../components/slider/sliderRightButton/slider.rightButton';
import { homeSliderData, leftButtonStyles, rightButtonStyles } from './homeSlider.data';

const sliderSettings = {
  pauseOnHover: true,
  arrows: false,
  adaptiveHeight: true,
  pauseOnDotsHover: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipe: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HomeSlider: FC = () => {
  const sliderRef = useRef(null);

  const next = (): void => {
    sliderRef.current.slickNext();
  };

  const prev = (): void => {
    sliderRef.current.slickPrev();
  };

  const pause = (): void => {
    sliderRef.current.slickPause();
  };

  const play = (): void => {
    sliderRef.current.slickPlay();
  };
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <SliderRightButton onMouseLeave={play} onMouseEnter={pause} onClick={prev} style={leftButtonStyles} position="left" />
      <SliderRightButton onMouseLeave={play} onMouseEnter={pause} onClick={next} style={rightButtonStyles} position="right" />
      <Slider lazyLoad="ondemand" ref={sliderRef} {...sliderSettings}>
        {homeSliderData.map(slide => (
          <Slide key={slide.title} slide={slide} />
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
