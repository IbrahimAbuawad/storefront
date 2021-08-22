import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './Categoeries';
import productReducer from './Products';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
})


const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;