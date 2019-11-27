import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const routes = ['Home', 'Order', 'Payment', 'Summary', 'About', 'Contact'];

const Header: FC = () => (
  <div>
    {routes.map(route => (
      <Link style={{ marginRight: 20 }} to={route === 'Home' ? '/' : route.toLowerCase()}>
        {route}
      </Link>
    ))}
  </div>
);

export default Header;
