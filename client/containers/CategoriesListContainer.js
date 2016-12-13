import { connect } from 'react-redux'
import { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions/categories';
import { fetchProductsByCategory, fetchProductsByCategorySuccess, fetchProductsByCategoryFailure, fetchProductsWithoutCategory, fetchProductsWithoutCategorySuccess, fetchProductsWithoutCategoryFailure } from '../actions/products';
import CategoriesList from '../components/CategoriesList';


const mapStateToProps = (state) => {
  return { 
    categoriesList: state.categories.categoriesList // 
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories()).then((response) => {
            !response.error ? dispatch(fetchCategoriesSuccess(response.payload.data)) : dispatch(fetchCategoriesFailure(response.payload.data));
          });
    },
    fetchProductsByCategory: (categoryId) => {
      dispatch(fetchProductsByCategory(categoryId)).then((response) => {
            !response.error ? dispatch(fetchProductsByCategorySuccess(response.payload.data)) : dispatch(fetchProductsByCategoryFailure(response.payload.data));
          });
    },
    fetchProductsWithoutCategory: () => {
      dispatch(fetchProductsWithoutCategory()).then((response) => {
            !response.error ? dispatch(fetchProductsWithoutCategorySuccess(response.payload.data)) : dispatch(fetchProductsWithoutCategoryFailure(response.payload.data));
          });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);