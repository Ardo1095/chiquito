import React, { FC } from 'react';
import './header.css';
import logo from '../../assets/chiquito_logo.png';
import cartIcon from '../../assets/cartIcon.svg';
import NavLink from '../navLink/navLink';

const routes = ['Home', 'Order', 'About', 'Contact'];

const Header: FC = () => {
  return (
    <>
      <div className="headerContainer">
        <img className="logo" alt="logo" src={logo} />
        <div className="navLinksContainer">
          {routes.map(route => (
            <NavLink key={route} route={route} />
          ))}
        </div>
        <div>
          <img alt="cartIcon" style={{ height: 30, width: 30 }} src={cartIcon} />
        </div>
      </div>
    </>
  );
};

export default Header;
