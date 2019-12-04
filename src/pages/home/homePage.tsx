import React, { FC } from 'react';
import HomeSlider from './homeSlider/homeSlider';
import './homePage.css';
import HomeWelcome from './homeWelcome/homeWelcome';

const HomePage: FC = () => (
  <div className="homeContainer">
    <HomeSlider />

    {/*<HomeWelcome />*/}
  </div>
);

export default HomePage;
