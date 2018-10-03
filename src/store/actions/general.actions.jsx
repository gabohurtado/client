import { START_LOADING, END_LOADING } from "./types";

export const startLoading = () => dispatch => {
    return dispatch({ type: START_LOADING })
}

export const endLoading = () => dispatch => {
    return dispatch({ type: END_LOADING })
}