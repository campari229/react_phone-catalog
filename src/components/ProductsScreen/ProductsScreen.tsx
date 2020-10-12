import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { productsSort } from '../../lib/productsSort';
import { getProducts } from '../../store/store';
import { Match, Product } from '../../Interfaces';
import { ProductCard } from '../ProductCard/ProductCard';

import './ProductScreen.scss';

type Props = {
  match: Match;
  title: string;
};

export const ProductsScreen: React.FC<Props> = (props: Props) => {
  const allProducts = useSelector(getProducts);
  const [products, setProducts] = useState(productsSort(props.match.path, allProducts));
  const [productsScreen, setProductsScreen] = useState(1);
  const [productsOnScreen, setProductsOnScreen] = useState(8);
  const productsToShow = [...products].splice(productsScreen, productsOnScreen);

  useEffect(() => {
    setProducts(productsSort(props.match.path, allProducts));
  }, [props.match.path, allProducts]);

  const buttonsMaker = (list: Product[]) => {
    const buttons = [];

    for (let i = 1; i < Math.ceil(list.length / productsOnScreen) + 1; i += 1) {
      buttons.push(i);
    }

    return buttons;
  };

  return (
    <section className="product-screen">
      <h2 className="product-screen__title">{props.title}</h2>
      <p className="product-screen__number-of-items">{`${products.length} models`}</p>
      <div className="product-screen__sort">
        <label htmlFor="sort" className="product-screen__sort-label">
          Sort by
          <select
            name="sort"
            id="sort"
            className="product-screen__select"
            defaultValue="Newest"
            onChange={(e) => setProducts(productsSort(e.target.value.toLowerCase(), products))}
          >
            <option>Name</option>
            <option>Newest</option>
            <option>Price</option>
          </select>
        </label>
        <label htmlFor="items-on-page" className="product-screen__sort-label">
          Items on page
          <select
            name="items-on-page"
            id="items-on-page"
            className="product-screen__select"
            defaultValue={8}
            onChange={(e) => setProductsOnScreen(Number(e.target.value))}
          >
            <option>4</option>
            <option>8</option>
            <option>16</option>
          </select>
        </label>
      </div>
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
