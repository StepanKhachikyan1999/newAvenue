export const SERVICE_DATA = 'SERVICE_DATA'

const initialState = {
    serviceData: []
}

export const serviceReducers = (state = initialState, action) => {
    switch (action.type) {

        case SERVICE_DATA:

            return {...state, serviceData: action.payload}

        default:
            return state
    }
}