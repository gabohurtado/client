import { START_LOADING, END_LOADING, SET_PATH_FROM_ROOT } from "./types";

export const startLoading = () => dispatch => {
    return dispatch({ type: START_LOADING })
}

export const endLoading = () => dispatch => {
    return dispatch({ type: END_LOADING })
}

export const setPathFromRoot = path => dispatch => {
    return dispatch({ type: SET_PATH_FROM_ROOT, payload: path })
}

export const errorSetPathFromRoot = error => dispatch => {
    return dispatch({ type: SET_PATH_FROM_ROOT, payload: error })
}