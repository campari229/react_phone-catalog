import { Product } from '../Interfaces';

export const productsSort = (sortType: string, products: Product[]): Product[] => {
  switch (sortType) {
    case 'price':
      return [
        ...products
          .sort((productA: Product, productB: Product) => productB.discount - productA.discount),
      ];
    case 'new':
      return [
        ...products
          .sort((productA: Product, productB: Product) => productB.age - productA.age),
      ];
    default:
      return products;
  }
};
