import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/store';

import { Product } from '../../Interfaces';

import './Categoryes.scss';

export const Categoryes: React.FC = () => {
  const products: Product[] = useSelector(getProducts);

  return (
    <section className="categoryes">
      <h2 className="categoryes__title">Shop by category</h2>
      <div className="categoryes__links">
        <NavLink className="categoryes__link" to="/phones">
          <div className="categoryes__link-container">
            <img
              src="img/images/phones.png"
              alt="phones"
              className="categoryes__img"
            />
          </div>
          <h3 className="categoryes__name">Phones</h3>
          <p className="categoryes__models">
            {`${products.filter(product => product.type === 'phone').length} models`}
          </p>
        </NavLink>
        <NavLink className="categoryes__link" to="/tablets">
          <div className="categoryes__link-container">
            <img
              src="img/images/tablets.png"
              alt="tablets"
              className="categoryes__img"
            />
          </div>
          <h3 className="categoryes__name">Tablets</h3>
          <p className="categoryes__models">
            {`${products.filter(product => product.type === 'tablet').length} models`}
          </p>
        </NavLink>
        <NavLink className="categoryes__link" to="/accsesories">
          <div className="categoryes__link-container">
            <img
              src="img/images/accesories.png"
              alt="accesories"
              className="categoryes__img"
            />
          </div>
          <h3 className="categoryes__name">Accessories</h3>
          <p className="categoryes__models">
            {`${products.filter(product => product.type === 'accsessori').length} models`}
          </p>
        </NavLink>
      </div>
    </section>
  );
};
