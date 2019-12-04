import React, { FC } from 'react';
import { Fade, Zoom } from 'react-reveal';
import Button from '../../../components/button/button';

interface SlideProps {
  backgroundImage: any;
  title: string;
  description: string;
  subTitle: string;
}

interface Props {
  slide: SlideProps;
}

const Slide: FC<Props> = ({ slide: { backgroundImage, description, subTitle, title } }) => (
  <div style={{ backgroundImage: `url(${backgroundImage})` }} className="slideContainer center">
    <div className="fullHeight center">
      <Fade left>
        <h4>{description}</h4>
      </Fade>
      <Zoom>
        <h1>{title}</h1>
      </Zoom>
      <Fade right>
        <h3>{subTitle}</h3>
      </Fade>
      <Fade bottom>
        <Button containerStyle={{ marginTop: 50 }} to="/order" />
      </Fade>
    </div>
  </div>
);

export default Slide;
