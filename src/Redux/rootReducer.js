import {combineReducers} from "redux";
import {HomeReducers} from "./Reducers/homeReducers";
import {serviceReducers} from "./Reducers/serviceReducers";

export const rootReducer = combineReducers({
    HomeReducers,
    serviceReducers
});
;