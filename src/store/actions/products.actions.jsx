import axios from 'axios'
import config from '../../config'

import { FETCH_PRODUCTS, ERROR_FETCHING_PRODUCTS, SHOW_DETAILS, ERROR_SHOWING_DETAILS, START_LOADING, END_LOADING, SET_PATH_FROM_ROOT, ERROR_SET_PATH_FROM_ROOT, CLEAN_PATH_FROM_ROOT } from "./types";



export const fetchProducts = criteria =>  async dispatch => {
    // Start loading
    dispatch({ type: START_LOADING })
    await axios.get(`${config.url_products}search${criteria}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        dispatch({ type: END_LOADING })
        dispatch({type: SET_PATH_FROM_ROOT, payload: response.data.path_from_root})
        dispatch({ type: FETCH_PRODUCTS, payload: response.data })
        return response;
    })
    .catch(err => {
        dispatch({ type: END_LOADING })
        dispatch({type: ERROR_SET_PATH_FROM_ROOT, payload: err.message})
        dispatch({ type: ERROR_FETCHING_PRODUCTS, payload: err.message })
        return err;
    });
}

export const showDetails = id => async dispatch => {
    // Start loading
    dispatch({ type: START_LOADING })
    await axios.get(`${config.url_products}${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        dispatch({ type: END_LOADING })
        dispatch({type: SET_PATH_FROM_ROOT, payload: response.data.path_from_root})
        dispatch({ type: SHOW_DETAILS, payload: response.data })
        return response
    })
    .catch(err => {
        dispatch({ type: END_LOADING })
        dispatch({type: ERROR_SET_PATH_FROM_ROOT, payload: err.message})
        dispatch({ type: ERROR_SHOWING_DETAILS, payload: err.message })
        return err
    });
}

export const cleanPathFromRoot = () => dispatch =>dispatch({type: CLEAN_PATH_FROM_ROOT})