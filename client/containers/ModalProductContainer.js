import { connect } from 'react-redux'
import { fetchProducts, fetchProductsSuccess, fetchProductsFailure, createProduct, createProductSuccess, createProductFailure, updateProduct, updateProductSuccess, updateProductFailure} from '../actions/products';
import { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions/categories';
import ModalProduct from '../components/ModalProduct';


const mapStateToProps = (state) => {
  return { 
    categoriesList: state.categories.categoriesList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (category) => {
      dispatch(createProduct(category)).then((response) => {
            !response.error ? dispatch(createProductSuccess(response.payload.data)) : dispatch(createProductFailure(response.payload.data));
            dispatch(fetchProducts()).then((response) => {
              !response.error ? dispatch(fetchProductsSuccess(response.payload.data)) : dispatch(fetchProductsFailure(response.payload.data));
            });
          });
    },
    updateProduct: (category) => {
      dispatch(updateProduct(category)).then((response) => {
            !response.error ? dispatch(updateProductSuccess(response.payload.data)) : dispatch(updateProductFailure(response.payload.data));
            dispatch(fetchProducts()).then((response) => {
              !response.error ? dispatch(fetchProductsSuccess(response.payload.data)) : dispatch(fetchProductsFailure(response.payload.data));
            });
          });
    },
    fetchCategories: () => {
      dispatch(fetchCategories()).then((response) => {
            !response.error ? dispatch(fetchCategoriesSuccess(response.payload.data)) : dispatch(fetchCategoriesFailure(response.payload.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalProduct);