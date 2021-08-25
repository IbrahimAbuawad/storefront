import { createStore, combineReducers ,applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './reducers/Categoeries';
import productReducer from './reducers/Products';
import cartReducer from "./reducers/Cart";
import thunk from 'redux-thunk';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart:cartReducer
})


const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;