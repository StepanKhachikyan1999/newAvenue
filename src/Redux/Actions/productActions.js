import {
    PRODUCT_FILTERS,
    PRODUCTDATA,
    BASKET_DATA,
    BASKETFILTER_DATA,
    SWISH_DATA,
    SWISHFILTER_DATA
} from "../Reducers/homeReducers";
import {productData} from '../Types/productTypes';

export const getProduct = () => {
    return dispatch => {
        dispatch({type: PRODUCTDATA, payload: {data: productData}})
    }
}

export const filterDataGet = (main, clear) => {
    return dispatch => {
        dispatch({type: PRODUCT_FILTERS, payload: {main: main, data: productData, clear: clear}})
    }
}

export const basketDataGet = (item) => {
    return dispatch => {
        dispatch({type: BASKET_DATA, payload: {item: item}})
    }
}

export const basketFilterDataGet = (id) => {
    return dispatch => {
        dispatch({type: BASKETFILTER_DATA, payload: {id: id}})
    }
}

export const swishDataGet = (item) => {
    return dispatch => {
        dispatch({type: SWISH_DATA, payload: {item: item}})
    }
}

export const swishRemoveDataGet = (id) => {
    return dispatch => {
        dispatch({type: SWISHFILTER_DATA, payload: {id: id}})
    }
}