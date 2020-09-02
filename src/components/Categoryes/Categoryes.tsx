import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import './Categoryes.scss';

export const Categoryes: React.FC = () => {
  return (
    <section className="categoryes">
      <h2 className="categoryes__title">Shop by category</h2>
      <div className="categoryes__links">
        <NavLink className="categoryes__link" to="/phones">
          <img
            src="img/images/phones.png"
            alt="phones"
          />
        </NavLink>
        <NavLink className="categoryes__link" to="/tablets">
          <img
            src="img/images/tablets.png"
            alt="tablets"
          />
        </NavLink>
        <NavLink className="categoryes__link" to="/accsesories">
          <img
            src="img/images/accesories.png"
            alt="accesories"
          />
        </NavLink>
      </div>
    </section>
  );
};
