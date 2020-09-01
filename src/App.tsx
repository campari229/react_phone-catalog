import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from './components/Header/Header';
import { Slider } from './components/Slider/Slider';
import { HotPrices } from './components/HotPrices/HotPrices';

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
        <HotPrices />
      </div>
    </div>
  );
};

export default App;
