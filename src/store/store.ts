import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './phones';

const rootReducer = combineReducers({
  products: productsReducer,
});

export const getProducts = (state: any) => state.products;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
