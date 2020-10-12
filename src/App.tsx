import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
// import { Slider } from './components/Slider/Slider';
// import { ProductsList } from './components/ProductsList/ProductsList';
// import { Categoryes } from './components/Categoryes/Categoryes';

import { ProductsScreen } from './components/ProductsScreen/ProductsScreen';
import { Home } from './components/Home/Home';

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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/phones" render={(props) => <ProductsScreen {...props} title="Mobile phones" />} />
        <Route path="/tablets" render={(props) => <ProductsScreen {...props} title="Tablets" />} />
        <Route path="/accsesories" render={(props) => <ProductsScreen {...props} title="Accsesories" />} />
      </Switch>
    </div>
  );
};

export default App;
