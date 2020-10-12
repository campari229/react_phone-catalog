import { Product } from '../Interfaces';

export const productsSort = (sortType: string, products: Product[]): Product[] => {
  switch (sortType) {
    case 'price':
      return [
        ...products
          .sort((productA: Product, productB: Product) => productB.discount - productA.discount),
      ];
    case 'newest':
      return [
        ...products
          .sort((productA: Product, productB: Product) => productA.age - productB.age),
      ];
    case 'name':
      return [
        ...products
          .sort((productA: Product, productB: Product) => {
            return productA.name.localeCompare(productB.name);
          }),
      ];
    case '/phones':
      return [
        ...products
          .filter((product: Product) => product.type === 'phone'),
      ];
    case '/tablets':
      return [
        ...products
          .filter((product) => product.type === 'tablet'),
      ];
    case '/accsesories':
      return [
        ...products
          .filter((product) => product.type === 'accessorie'),
      ];
    default:
      return products;
  }
};
