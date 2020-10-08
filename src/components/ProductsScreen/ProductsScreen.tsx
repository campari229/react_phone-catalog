import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { productsSort } from '../../lib/productsSort';
import { getProducts } from '../../store/store';
import { Match, Product } from '../../Interfaces';
import { ProductCard } from '../ProductCard/ProductCard';

import './ProductScreen.scss';

type Props = {
  match: Match;
};

export const ProductsScreen: React.FC<Props> = ({ match }) => {
  const products = productsSort(match.path, useSelector(getProducts));
  const [productsScreen, setProductsScreen] = useState(1);
  const productsToShow = [...products].splice(productsScreen, 8);

  const buttonsMaker = (list: Product[]) => {
    const buttons = [];

    for (let i = 1; i < Math.ceil(list.length / 8) + 1; i += 1) {
      buttons.push(i);
    }

    return buttons;
  };

  return (
    <section className="product-screen">
      <ul className="product-screen__list">
        {productsToShow.map((product) => (
          <li className="product-screen__list-item">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div className="product-screen__navigation products-navigation" style={{ width: `${(buttonsMaker(products).length + 2) * 40}px` }}>
        <button
          className="products-navigation__btn"
          type="button"
          onClick={() => {
            if (productsScreen > 1) {
              setProductsScreen(productsScreen - 1);
            }
          }}
        >
          {'<'}
        </button>
        {buttonsMaker(products).map((button) => (
          <button
            type="button"
            className={productsScreen === button ? 'products-navigation__btn products-navigation__btn--active' : 'products-navigation__btn'}
            onClick={() => setProductsScreen(button)}
          >
            {button}
          </button>
        ))}
        <button
          className="products-navigation__btn"
          type="button"
          onClick={() => {
            if (productsScreen < Math.floor(products.length / 8)) {
              setProductsScreen(productsScreen + 1);
            }
          }}
        >
          {'>'}
        </button>
      </div>
    </section>
  );
};
