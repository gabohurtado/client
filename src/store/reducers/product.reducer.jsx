import { FETCH_PRODUCTS, ERROR_FETCHING_PRODUCTS, SHOW_DETAILS, ERROR_SHOWING_DETAILS, SET_PATH_FROM_ROOT, ERROR_SET_PATH_FROM_ROOT, CLEAN_PATH_FROM_ROOT } from "../actions/types";

const initialState = {
    result: {},
    item: {},
    path_from_root: [],
    error: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                result: action.payload,
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
        case SET_PATH_FROM_ROOT:
            return {
                ...state,
                path_from_root: action.payload,
                error: ''
            }
        case ERROR_SET_PATH_FROM_ROOT:
            return {
                ...state,
                error: action.payload
            }
        case CLEAN_PATH_FROM_ROOT:
            return {
                ...state,
                path_from_root: [],
                error: ''
            }
        default: return state
    }
}