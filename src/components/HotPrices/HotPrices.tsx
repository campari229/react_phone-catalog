import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/store';

import { sliderMove } from '../../lib/sliderMove';

import { Product } from '../../Interfaces';
import { ProductCard } from '../ProductCard/ProductCard';

import './HotPrices.scss';

export const HotPrices: React.FC = () => {
  const products: Product[] = useSelector(getProducts);
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
    <section className="hot-prices">
      <div className="hot-prices__header">
        <h2 className="hot-prices__title">Hot Prices</h2>
        <div className="hot-prices__buttons">
          <button
            type="button"
            onClick={() => move('left')}
            className="hot-prices__btn"
            disabled={translate > -(cardWidth + margin)}
          >
            {'<'}
          </button>
          <button
            type="button"
            onClick={() => move('right')}
            className="hot-prices__btn"
            disabled={translate <= -maxTranslate}
          >
            {'>'}
          </button>
        </div>
      </div>
      <ul className="hot-prices__list product-list" id="product-list">
        {products.map(product => (
          <li
            className="product-list__item"
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
