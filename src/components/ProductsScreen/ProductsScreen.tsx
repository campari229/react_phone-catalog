import React from 'react';
import { useSelector } from 'react-redux';

import { productsSort } from '../../lib/productsSort';
import { getProducts } from '../../store/store';
import { Match } from '../../Interfaces';

// import { ProductCard } from '../ProductCard/ProductCard';

type Props = {
  match: Match;
};

export const ProductsScreen: React.FC<Props> = ({ match }) => {
  const products = productsSort(match.path, useSelector(getProducts));

  return (
    <ul>
      {products.map((product) => (
        <li>{product.name}</li>
      ))}
    </ul>
  );
};
