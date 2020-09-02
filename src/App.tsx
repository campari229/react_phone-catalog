import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from './components/Header/Header';
import { Slider } from './components/Slider/Slider';
import { ProductsList } from './components/ProductsList/ProductsList';
import { Categoryes } from './components/Categoryes/Categoryes';

import { loadData } from './lib/api';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData('products'));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Slider />
        <ProductsList title="Hot prices" sortType="price" />
        <Categoryes />
        <ProductsList title="Brand new models" sortType="new" />
      </div>
    </div>
  );
};

export default App;
