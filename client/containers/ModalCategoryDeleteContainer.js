import { connect } from 'react-redux'
import { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure, deleteCategory, deleteCategorySuccess, deleteCategoryFailure} from '../actions/categories';
import { fetchProducts, fetchProductsSuccess, fetchProductsFailure} from '../actions/products';
import ModalCategoryDelete from '../components/ModalCategoryDelete';


const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCategory: (categoryId) => {
      dispatch(deleteCategory(categoryId)).then((response) => {
            !response.error ? dispatch(deleteCategorySuccess(response.payload.data)) : dispatch(deleteCategorySuccess(response.payload.data));
            dispatch(fetchCategories()).then((response) => {
              !response.error ? dispatch(fetchCategoriesSuccess(response.payload.data)) : dispatch(fetchCategoriesFailure(response.payload.data));
            });

            dispatch(fetchProducts()).then((resp) => {
              !resp.error ? dispatch(fetchProductsSuccess(resp.payload.data)) : dispatch(fetchProductsFailure(resp.payload.data));
            });

          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCategoryDelete);