import { FETCH_PRODUCTS, ERROR_FETCHING_PRODUCTS, SHOW_DETAILS, ERROR_SHOWING_DETAILS } from "../actions/types";

const initialState ={
    items: [],
    item: {},
    error: '',
}

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                error: ''
            }
        case ERROR_FETCHING_PRODUCTS:
            return {
                ...state,
                error: action.payload
            }
        case SHOW_DETAILS:
            return {
                ...state,
                item: action.payload,
                error: ''
            }
        case ERROR_SHOWING_DETAILS:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}