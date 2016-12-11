import { connect } from 'react-redux'
import { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure, createCategory, createCategorySuccess, createCategoryFailure, updateCategory, updateCategorySuccess, updateCategoryFailure} from '../actions/categories';
import ModalCategory from '../components/ModalCategory';


const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCategory: (category) => {
      dispatch(createCategory(category)).then((response) => {
            !response.error ? dispatch(createCategorySuccess(response.payload.data)) : dispatch(createCategoryFailure(response.payload.data));
            dispatch(fetchCategories()).then((response) => {
              !response.error ? dispatch(fetchCategoriesSuccess(response.payload.data)) : dispatch(fetchCategoriesFailure(response.payload.data));
            });
          });
    },
    updateCategory: (category) => {
      dispatch(updateCategory(category)).then((response) => {
            !response.error ? dispatch(updateCategorySuccess(response.payload.data)) : dispatch(updateCategoryFailure(response.payload.data));
            dispatch(fetchCategories()).then((response) => {
              !response.error ? dispatch(fetchCategoriesSuccess(response.payload.data)) : dispatch(fetchCategoriesFailure(response.payload.data));
            });
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCategory);