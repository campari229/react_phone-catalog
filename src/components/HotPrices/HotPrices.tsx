import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/store';

import { Product } from '../../Interfaces';
import { ProductCard } from '../ProductCard/ProductCard';

export const HotPrices: React.FC = () => {
  const products: Product[] = useSelector(getProducts);

  return (
    <ul>
      {products.map(product => (
        <li>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
