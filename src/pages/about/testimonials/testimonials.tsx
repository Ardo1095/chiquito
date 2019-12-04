import React, { FC } from 'react';
import './testimonials.css';
import clientImage from '../../../assets/clientImage.jpg'
const Testimonials: FC = () => (
  <div className="testimonialsContainer center">
    <h1>TESTIMONIALS</h1>

    <div className="testimonialsContent">
      <div className="testimonial">
        <h1 className="testimonialQuote">&ldquo;</h1>
        <p>
          Cum nomen prarere, omnes peses amor pius, rusticus racanaesadas. Ubi est mirabilis gemna? Cum gabalium velum, omnes
          fugaes Ubi est peritus devatio? A falsis
        </p>
        <div className="clientContainer">
          <div style={{ backgroundImage: `url(${clientImage})`}} className="clientImage" />
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
