import React from 'react';
import {
  Switch,
  NavLink,
  Route,
} from 'react-router-dom';

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
                to="tablets"
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
          <Switch>
            <Route path="/" />
            <Route path="/phones" />
            <Route path="/tablets" />
            <Route path="/accsesories" />
          </Switch>
        </nav>
      </div>
      <div className="header__buttons-wrapper">
        <NavLink to="/favotites" className="header__favorites" />
        <NavLink to="/card" className="header__card" />
      </div>
    </div>
  );
};