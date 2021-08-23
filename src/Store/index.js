import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './reducers/Categoeries';
import productReducer from './reducers/Products';
import cartReducer from "./reducers/Cart";

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart:cartReducer
})


const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;