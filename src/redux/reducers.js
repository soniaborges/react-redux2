//reunindo todos os reducers e passando os estados para a store
// a store ira passar esses estados para o react

import { combineReducers } from 'redux';
import cart from './cartReducer';
import products from './productsReducer';

export default combineReducers({
  cart,
  products,
});
