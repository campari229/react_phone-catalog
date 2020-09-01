/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { Product } from '../../Interfaces';

import './ProductCard.scss';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="card">
      <img
        alt={product.name}
        src={product.imageUrl}
        className="card__img"
      />
      <p className="card__name">{product.name}</p>
      <div className="card__price">
        <p className="card__price-main">{`$${product.price - (product.price * (product.discount / 100))}`}</p>
        <p className="card__price-full">{`$${product.price}`}</p>
      </div>
      <div className="card__about">
        <div className="card__about-text">
          <p className="card__about-text-characteristic">Screen</p>
          <p className="card__about-text-value">{product.screen}</p>
        </div>
        <div className="card__about-text">
          <p className="card__about-text-characteristic">Capacity</p>
          <p className="card__about-text-value">{product.capacity ? product.capacity : '-'}</p>
        </div>
        <div className="card__about-text">
          <p className="card__about-text-characteristic">RAM</p>
          <p className="card__about-text-value">{product.ram ? product.ram : '-'}</p>
        </div>
      </div>
      <div className="card__buttons">
        <button className="card__button-cart" type="button">Add to cart</button>
        <button className="card__button-favorites" type="button">
          <img src="img/images/favorite.svg" alt="favorite" />
        </button>
      </div>
    </div>
  );
};
