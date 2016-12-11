import axios from 'axios';

//Categories list
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';

//Create new category
export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
export const CREATE_CATEGORY_FAILURE = 'CREATE_CATEGORY_FAILURE';
export const RESET_NEW_CATEGORY = 'RESET_NEW_CATEGORY';


//Update category
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_CATEGORY_SUCCESS = 'UPDATE_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY_FAILURE = 'UPDATE_CATEGORY_FAILURE';
export const RESET_EXISTED_CATEGORY = 'RESET_EXISTED_CATEGORY';

//Fetch category
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';
export const RESET_GETTED_CATEGORY = 'RESET_GETTED_CATEGORY';

//Delete category
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_FAILURE = 'DELETE_CATEGORY_FAILURE';
export const RESET_DELETED_CATEGORY = 'RESET_DELETED_CATEGORY';



const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
export function fetchCategories() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/categories`,
    headers: []
  });

  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}

export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
}

export function fetchCategoriesFailure(error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
}


export function resetCategoryFields() {
  return {
    type: RESET_CATEGORY_FIELDS
  }
}
;


export function createCategory(props) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/categories`
  });

  return {
    type: CREATE_CATEGORY,
    payload: request
  };
}

export function createCategorySuccess(newCategory) {
  return {
    type: CREATE_CATEGORY_SUCCESS,
    payload: newCategory
  };
}

export function createCategoryFailure(error) {
  return {
    type: CREATE_CATEGORY_FAILURE,
    payload: error
  };
}


export function updateCategory(category) {
  const request = axios({
    method: 'put',
    data: category,
    url: `${ROOT_URL}/categories`
  });

  return {
    type: UPDATE_CATEGORY,
    payload: request
  };
}

export function updateCategorySuccess() {
  return {
    type: UPDATE_CATEGORY_SUCCESS
  };
}

export function updateCategoryFailure(error) {
  return {
    type: UPDATE_CATEGORY_FAILURE,
    payload: error
  };
}

export function resetCategorySuccess() {
  return {
    type: RESET_EXISTED_CATEGORY
  };
}



export function resetNewPost() {
  return {
    type: RESET_NEW_CATEGORY
  };
}

export function resetDeletedCategory() {
  return {
    type: RESET_DELETED_CATEGORY
  }
}
;

export function fetchCategory(id) {
  const request = axios.get(`${ROOT_URL}/categories/${id}`);

  return {
    type: FETCH_CATEGORY,
    payload: request
  };
}


export function fetchCategorySuccess(category) {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: category
  };
}

export function fetchCategoryFailure(error) {
  return {
    type: FETCH_CATEGORY_FAILURE,
    payload: error
  };
}


export function deleteCategory(id) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/categories/${id}`,
  });
  return {
    type: DELETE_CATEGORY,
    payload: request
  };
}

export function deleteCategorySuccess(deletedCategory) {
  return {
    type: DELETE_CATEGORY_SUCCESS
  };
}

export function deleteCategoryFailure(response) {
  return {
    type: DELETE_CATEGORY_FAILURE,
    payload: response
  };
}