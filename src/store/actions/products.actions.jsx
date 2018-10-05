import axios from 'axios'
import config from '../../config'

import { FETCH_PRODUCTS, ERROR_FETCHING_PRODUCTS, SHOW_DETAILS, ERROR_SHOWING_DETAILS, START_LOADING, END_LOADING } from "./types";



export const fetchProducts = criteria => dispatch => {
    // Start loading
    dispatch({ type: START_LOADING })
    axios.get(`${config.url_products}search${criteria}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        dispatch({ type: END_LOADING })
        dispatch({ type: FETCH_PRODUCTS, payload: response.data })
    })
    .catch(err => {
        dispatch({ type: END_LOADING })
        dispatch({ type: ERROR_FETCHING_PRODUCTS, payload: err.message })
    });
}

export const showDetails = id => dispatch => {
    console.log('Response',id);
    // Start loading
    dispatch({ type: START_LOADING })
    axios.get(`${config.url_products}${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        
        dispatch({ type: END_LOADING })
        dispatch({ type: SHOW_DETAILS, payload: response.data })
    })
    .catch(err => {
        dispatch({ type: END_LOADING })
        console.log(err.message);
        
        dispatch({ type: ERROR_SHOWING_DETAILS, payload: err })
    });
}