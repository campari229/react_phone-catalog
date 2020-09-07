import React from 'react';

import { Slider } from '../Slider/Slider';
import { ProductsList } from '../ProductsList/ProductsList';
import { Categoryes } from '../Categoryes/Categoryes';

export const Home: React.FC = () => {
  return (
    <div className="container">
      <Slider />
      <ProductsList title="Hot prices" sortType="price" />
      <Categoryes />
      <ProductsList title="Brand new models" sortType="new" />
    </div>
  );
};
