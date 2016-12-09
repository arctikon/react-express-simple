import {
  FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, RESET_PRODUCTS,
  CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE, RESET_NEW_PRODUCT, 
  UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, RESET_EXISTED_PRODUCT, 
  FETCH_PRODUCT, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, RESET_GETTED_PRODUCT, 
  DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, RESET_DELETED_PRODUCT
} from '../actions/products';


  const INITIAL_STATE = { productsList: {products: [], error:null, loading: false},  
              newProduct:{product:null, error: null, loading: false}, 
              updatedProduct:{product:null, error: null, loading: false},
              fetchedProduct:{product:null, error:null, loading: false}, 
              deletedProduct: {product: null, error:null, loading: false},
            };

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_PRODUCTS:
    return { ...state, productsList: {products:[], error: null, loading: true} }; 
  case FETCH_PRODUCTS_SUCCESS:
    return { ...state, productsList: {products: action.payload, error:null, loading: false} };
  case FETCH_PRODUCTS_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, productsList: {products: [], error: error, loading: false} };
  case RESET_PRODUCTS:
    return { ...state, productsList: {products: [], error:null, loading: false} };

  case FETCH_PRODUCT:
    return { ...state, fetchedProduct:{...state.fetchedProduct, loading: true}};
  case FETCH_PRODUCT_SUCCESS:
    return { ...state, fetchedProduct: {product: action.payload, error:null, loading: false}};
  case FETCH_PRODUCT_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, fetchedProduct: {product: null, error:error, loading:false}};
  case RESET_GETTED_PRODUCT:
    return { ...state, fetchedProduct: {product: null, error:null, loading: false}};

  case UPDATE_PRODUCT:
    return {...state, updatedProduct: {...state.updatedProduct, loading: true}}
  case UPDATE_PRODUCT_SUCCESS:
    return {...state, updatedProduct: {product:action.payload, error:null, loading: false}}
  case UPDATE_PRODUCT_FAILURE:
    error = action.payload || {message: action.payload.message};
    return {...state, updatedProduct: {product:null, error:error, loading: false}}
  case RESET_EXISTED_PRODUCT:
    return {...state,  updatedProduct:{product:null, error:null, loading: false}}


  case CREATE_PRODUCT:
    return {...state, newProduct: {...state.newProduct, loading: true}}
  case CREATE_PRODUCT_SUCCESS:
    return {...state, newProduct: {product:action.payload, error:null, loading: false}}
  case CREATE_PRODUCT_FAILURE:
    error = action.payload || {message: action.payload.message};
    return {...state, newProduct: {product:null, error:error, loading: false}}
  case RESET_NEW_PRODUCT:
    return {...state,  newProduct:{product:null, error:null, loading: false}}


  case DELETE_PRODUCT:
    return {...state, deletedProduct: {...state.deletedProduct, loading: true}}
  case DELETE_PRODUCT_SUCCESS:
    return {...state, deletedProduct: {product:action.payload, error:null, loading: false}}
  case DELETE_PRODUCT_FAILURE:
    error = action.payload || {message: action.payload.message};
    return {...state, deletedProduct: {product:null, error:error, loading: false}}
  case RESET_DELETED_PRODUCT:
    return {...state,  deletedProduct:{product:null, error:null, loading: false}}
    
  default:
    return state;
  }
}
