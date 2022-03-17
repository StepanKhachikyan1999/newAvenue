import {SERVICE_DATA} from "../Reducers/serviceReducers";
import {serviceData} from "../Types/servicesType";

export const serviceGet = () => {
    return dispatch => {
        dispatch({type: SERVICE_DATA, payload: serviceData})
    }
}