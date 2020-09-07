import React from 'react';
import { useSelector } from 'react-redux';

import { productsSort } from '../../lib/productsSort';
import { getProducts } from '../../store/store';

type Props = {
  match: any;
};

export const ProductsScreen: React.FC<Props> = ({ match }) => {
  const phones = productsSort('phones', useSelector(getProducts));
  console.log(match);

  return (
    <ul>
      {phones.map(phone => (
        <li>
          {phone.type}
        </li>
      ))}
    </ul>
  );
};
