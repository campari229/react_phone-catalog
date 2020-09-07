import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/store';

import { sliderMove } from '../../lib/sliderMove';
import { productsSort } from '../../lib/productsSort';

import { Product } from '../../Interfaces';
import { ProductCard } from '../ProductCard/ProductCard';

import './ProductsList.scss';

type Props = {
  title: string;
  sortType: string;
};

export const ProductsList: React.FC<Props> = ({ title, sortType }) => {
  const products: Product[] = productsSort(sortType, useSelector(getProducts));
  const [translate, setTranslate] = useState(0);
  const cardWidth = 272;
  const list = document.getElementById('product-list');
  const width = list?.offsetWidth;
  let margin = 0;
  let maxTranslate = 0;

  if (width) {
    margin = ((width % cardWidth) / (Math.floor(width / cardWidth)));
    maxTranslate = (products.length - (Math.floor(width / cardWidth))) * (cardWidth + margin);
  }

  const move = (direction: string) => {
    if (width) {
      setTranslate(sliderMove(direction, (cardWidth + margin), translate, maxTranslate));
    }
  };

  return (
    <section className="products-list">
      <div className="products-list__header">
        <h2 className="products-list__title">{title}</h2>
        <div className="products-list__buttons">
          <button
            type="button"
            onClick={() => move('left')}
            className="products-list__btn"
            disabled={translate > -(cardWidth + margin)}
          >
            {'<'}
          </button>
          <button
            type="button"
            onClick={() => move('right')}
            className="products-list__btn"
            disabled={translate <= -maxTranslate}
          >
            {'>'}
          </button>
        </div>
      </div>
      <ul className="products-list__list list" id="product-list">
        {products.map(product => (
          <li
            className="list__item"
            style={{
              margin: `0 ${margin / 2}px`,
              transform: `translateX(${translate}px)`,
            }}
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};
