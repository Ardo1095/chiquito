import React, { FC } from 'react';
import './aboutSection.css';
import AboutSlider from './aboutSlider/aboutSlider';
import AboutText from './aboutText/aboutText';

const AboutSection: FC = () => (
  <div className="aboutSectionContainer">
    <AboutText />
    <AboutSlider />
  </div>
);

export default AboutSection;
