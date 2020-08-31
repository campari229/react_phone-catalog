const phonesUrl = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';

export const loadData = (dataToLoad: string, productId: string) => async (dispatch: any) => {
  switch (dataToLoad) {
    case 'phones': {
      const response = await fetch(phonesUrl);
      const result = await response.json();

      dispatch(setPhones(result));
      break;
    }

    case 'details': {
      const response = await fetch(`https://mate-academy.github.io/react_phone-catalog/api/products/${productId}.json`);
      const result = await response.json();

      dispatch(setDetails(result));
      break;
    }

    default:
      break;
  }
};
