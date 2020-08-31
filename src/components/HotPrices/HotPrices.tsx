import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/store';

import { Product } from '../../Interfaces';
import { ProductCard } from '../ProductCard/ProductCard';

import './HotPrices.scss';

export const HotPrices: React.FC = () => {
  const products: Product[] = useSelector(getProducts);

  return (
    <ul className="hot-prices__list product-list">
      {products.map(product => (
        <li className="product-list__item">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
