import React, { FC } from 'react';
import './button.css';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  containerStyle?: object;
}

const Button: FC<Props> = ({ to, containerStyle }) => (
  <div className="buttonContainer" style={{ ...containerStyle }}>
    <Link className="button" to={to}>
      SHOP NOW
    </Link>
  </div>
);

export default Button;
