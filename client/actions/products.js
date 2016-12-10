import axios from 'axios';

//Products list
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const RESET_PRODUCTS = 'RESET_PRODUCTS';


//Fetch products by category name
export const FETCH_PRODUCTS_BY_CATEGORY = 'FETCH_PRODUCTS_BY_CATEGORY';
export const FETCH_PRODUCTS_BY_CATEGORY_SUCCESS = 'FETCH_PRODUCTS_BY_CATEGORY_SUCCESS';
export const FETCH_PRODUCTS_BY_CATEGORY_FAILURE = 'FETCH_PRODUCTS_BY_CATEGORY_FAILURE';
export const RESET_PRODUCTS_BY_CATEGORY = 'RESET_PRODUCTS_BY_CATEGORY';

//Create new product
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';
export const RESET_NEW_PRODUCT = 'RESET_NEW_PRODUCT';


//Update product
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';
export const RESET_EXISTED_PRODUCT = 'RESET_EXISTED_PRODUCT';

//Fetch product
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';
export const RESET_GETTED_PRODUCT = 'RESET_GETTED_PRODUCT';

//Delete product
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const RESET_DELETED_PRODUCT = 'RESET_DELETED_PRODUCT';



const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
export function fetchProducts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/products`,
    headers: []
  });

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
}

export function fetchProductsFailure(error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
}


export function resetProductFields() {
  return {
    type: RESET_PRODUCT_FIELDS
  };
}




export function fetchProductsByCategory(categoryId) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/products/byCategory/${categoryId}`,
    headers: []
  });

  return {
    type: FETCH_PRODUCTS_BY_CATEGORY,
    payload: request
  };
}

export function fetchProductsByCategorySuccess(products) {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
    payload: products
  };
}

export function fetchProductsByCategoryFailure(error) {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
    payload: error
  };
}


export function resetProductsByCategory() {
  return {
    type: RESET_PRODUCTS_BY_CATEGORY
  };
}



export function createProduct(props) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/products`
  });

  return {
    type: CREATE_PRODUCT,
    payload: request
  };
}

export function createProductSuccess(newProduct) {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: newProduct
  };
}

export function createProductFailure(error) {
  return {
    type: CREATE_PRODUCT_FAILURE,
    payload: error
  };
}


export function updateProduct(props) {
  const request = axios({
    method: 'put',
    data: props,
    url: `${ROOT_URL}/products`
  });

  return {
    type: UPDATE_PRODUCT,
    payload: request
  };
}

export function updateProductSuccess() {
  return {
    type: UPDATE_PRODUCT_SUCCESS
  };
}

export function updateProductFailure(error) {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: error
  };
}

export function resetProductSuccess() {
  return {
    type: RESET_EXISTED_PRODUCT
  };
}



export function resetNewPost() {
  return {
    type: RESET_NEW_PRODUCT
  };
}

export function resetDeletedProduct() {
  return {
    type: RESET_DELETED_PRODUCT
  }
}
;

export function fetchProduct(id) {
  const request = axios.get(`${ROOT_URL}/products/${id}`);

  return {
    type: FETCH_PRODUCT,
    payload: request
  };
}


export function fetchProductSuccess(product) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product
  };
}

export function fetchProductFailure(error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  };
}


export function deleteProduct(id) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/products/${id}`,
  });
  return {
    type: DELETE_PRODUCT,
    payload: request
  };
}

export function deleteProductSuccess(deletedProduct) {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: deletedPost
  };
}

export function deleteProductFailure(response) {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: response
  };
}