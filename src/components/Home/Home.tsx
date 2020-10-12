import React from 'react';

import { Slider } from '../Slider/Slider';
import { ProductsList } from '../ProductsList/ProductsList';
import { Categoryes } from '../Categoryes/Categoryes';

import './Home.scss';

export const Home: React.FC = () => {
  return (
    <div className="container">
      <Slider />
      <ProductsList title="Hot prices" sortType="price" />
      <Categoryes />
      <ProductsList title="Brand new models" sortType="newest" />
    </div>
  );
};
