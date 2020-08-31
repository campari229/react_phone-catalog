import { AnyAction } from 'redux';

import { Product } from '../Interfaces';

const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = (products: Product[]) => ({ type: SET_PRODUCTS, products });

export const productsReducer = (products = [], action: AnyAction) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return [
        ...products,
        ...action.products,
      ];

    default:
      return products;
  }
};
