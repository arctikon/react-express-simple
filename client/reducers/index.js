import { combineReducers } from 'redux';
import ProductsReducer from './reducer_products';
import CategoriesReducer from './reducer_categories';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  products: ProductsReducer,
  categories: CategoriesReducer
});

export default rootReducer;
