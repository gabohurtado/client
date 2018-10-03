import { combineReducers } from 'redux';
import productReducer from './product.reducer'
import generalReducer from './general.reducer'


export default combineReducers({
    product: productReducer,
    general: generalReducer
})