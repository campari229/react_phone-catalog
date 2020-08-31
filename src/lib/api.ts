import { setProducts } from '../store/phones';

const productsUrl = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';

export const loadData = (dataToLoad: string) => async (dispatch: any) => {
  switch (dataToLoad) {
    case 'products': {
      const response = await fetch(productsUrl);
      const result = await response.json();

      dispatch(setProducts(result));
      break;
    }

    // case 'details': {
    //   const response = await fetch(`https://mate-academy.github.io/react_phone-catalog/api/products/${productId}.json`);
    //   const result = await response.json();

    //   dispatch(setDetails(result));
    //   break;
    // }

    default:
      break;
  }
};
