import {
	FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, RESET_CATEGORIES,
  CREATE_CATEGORY, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAILURE, RESET_NEW_CATEGORY, 
  UPDATE_CATEGORY, UPDATE_CATEGORY_SUCCESS, UPDATE_CATEGORY_FAILURE, RESET_EXISTED_CATEGORY, 
  FETCH_CATEGORY, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE, RESET_GETTED_CATEGORY, 
  DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE, RESET_DELETED_CATEGORY
} from '../actions/categories';


	const INITIAL_STATE = { categoriesList: {categories: [], error:null, loading: false},  
							newCategory:{category:null, error: null, loading: false}, 
              updatedCategory:{category:null, error: null, loading: false},
							fetchedCategory:{category:null, error:null, loading: false}, 
							deletedCategory: {category: null, error:null, loading: false},
						};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_CATEGORIES:
  	return { ...state, categoriesList: {categories:[], error: null, loading: true} }; 
  case FETCH_CATEGORIES_SUCCESS:
    return { ...state, categoriesList: {categories: action.payload, error:null, loading: false} };
  case FETCH_POSTS_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, categoriesList: {categories: [], error: error, loading: false} };
  case RESET_CATEGORIES:
    return { ...state, categoriesList: {categories: [], error:null, loading: false} };

  case FETCH_CATEGORY:
    return { ...state, fetchedCategory:{...state.fetchedCategory, loading: true}};
  case FETCH_CATEGORY_SUCCESS:
    return { ...state, fetchedCategory: {category: action.payload, error:null, loading: false}};
  case FETCH_CATEGORY_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, fetchedCategory: {category: null, error:error, loading:false}};
  case RESET_GETTED_CATEGORY:
    return { ...state, fetchedCategory: {category: null, error:null, loading: false}};

  case UPDATE_CATEGORY:
  	return {...state, updatedCategory: {...state.updatedCategory, loading: true}}
  case UPDATE_CATEGORY_SUCCESS:
  	return {...state, updatedCategory: {category:action.payload, error:null, loading: false}}
  case UPDATE_CATEGORY_FAILURE:
    error = action.payload || {message: action.payload.message};
  	return {...state, updatedCategory: {category:null, error:error, loading: false}}
  case RESET_EXISTED_CATEGORY:
  	return {...state,  updatedCategory:{category:null, error:null, loading: false}}


  case CREATE_CATEGORY:
    return {...state, newCategory: {...state.newCategory, loading: true}}
  case CREATE_CATEGORY_SUCCESS:
    return {...state, newCategory: {category:action.payload, error:null, loading: false}}
  case CREATE_CATEGORY_FAILURE:
    error = action.payload || {message: action.payload.message};
    return {...state, newCategory: {category:null, error:error, loading: false}}
  case RESET_NEW_CATEGORY:
    return {...state,  newCategory:{category:null, error:null, loading: false}}


  case DELETE_CATEGORY:
   	return {...state, deletedCategory: {...state.deletedCategory, loading: true}}
  case DELETE_CATEGORY_SUCCESS:
  	return {...state, deletedCategory: {category:action.payload, error:null, loading: false}}
  case DELETE_CATEGORY_FAILURE:
    error = action.payload || {message: action.payload.message};
  	return {...state, deletedCategory: {category:null, error:error, loading: false}}
  case RESET_DELETED_CATEGORY:
  	return {...state,  deletedCategory:{category:null, error:null, loading: false}}
    
  default:
    return state;
  }
}
