import { connect } from 'react-redux'
import { fetchProducts, fetchProductsSuccess, fetchProductsFailure, deleteProduct, deleteProductSuccess, deleteProductFailure} from '../actions/products';
import ModalProductDelete from '../components/ModalProductDelete';


const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (productId) => {
      dispatch(deleteProduct(productId)).then((response) => {
            !response.error ? dispatch(deleteProductSuccess(response.payload.data)) : dispatch(deleteProductSuccess(response.payload.data));
            dispatch(fetchProducts()).then((response) => {
              !response.error ? dispatch(fetchProductsSuccess(response.payload.data)) : dispatch(fetchProductsFailure(response.payload.data));
            });
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalProductDelete);