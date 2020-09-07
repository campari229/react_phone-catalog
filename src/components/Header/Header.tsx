import React from 'react';
import {
  // Switch,
  NavLink,
  // Route,
} from 'react-router-dom';

// import { ProductsScreen } from '../ProductsScreen/ProductsScreen';
// import { Home } from '../Home/Home';

import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__nav-wrapper">
        <h2 className="header__logo">Logo</h2>
        <nav className="header__navigation navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink
                to="/"
                exact
              >
                home
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                to="/phones"
              >
                phones
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                to="/tablets"
              >
                tablets
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                to="/accsesories"
              >
                accsesories
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__buttons-wrapper">
        <NavLink to="/favotites" className="header__favorites">
          <img src="img/images/favorite.svg" alt="favorite" />
        </NavLink>
        <NavLink to="/card" className="header__card">
          <img src="img/images/basket.png" alt="basket" />
        </NavLink>
      </div>
    </div>
  );
};
