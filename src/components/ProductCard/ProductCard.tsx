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
        {product.price - (product.price * (product.discount / 100))}
        {product.price}
      </div>
      <div className="card__about">
        <div className="card__abot-text">
          <p>Screen</p>
          <p>{product.screen}</p>
        </div>
        <div className="card__abot-text">
          <p>Capacity</p>
          <p>{product.capacity ? product.capacity : '-'}</p>
        </div>
        <div className="card__abot-text">
          <p>RAM</p>
          <p>{product.ram ? product.ram : '-'}</p>
        </div>
        <div className="card__buttons">
          <button className="card__button-cart" type="button">Add to cart</button>
          <button className="card__button-favorites" type="button">heart</button>
        </div>
      </div>
    </div>
  );
};
