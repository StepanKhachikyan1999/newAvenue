export const PRODUCTDATA = 'PRODUCTDATA';
export const PRODUCT_FILTERS = 'PRODUCT_FILTERS';
export const BASKET_DATA = 'BASKET_DATA'
export const BASKETFILTER_DATA = 'BASKETFILTER_DATA'
export const SWISH_DATA = 'SWISH_DATA'
export const SWISHFILTER_DATA = 'SWISHFILTER_DATA'

const initialState = {
    productData: [],
    filterData: [],
    basketData: [],
    swishData: []
}

export const HomeReducers = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTDATA:

            return {...state, productData: action.payload.data}

        case PRODUCT_FILTERS:
            let x;
            if (action.payload.main.mainTo && !action.payload.main.froMain && !action.payload.main.arrangementMain) {
                x = action.payload.data.filter((i) => Number(i.price) < action.payload.main.mainTo)
            } else if (action.payload.main.froMain && !action.payload.main.mainTo && !action.payload.main.arrangementMain) {
                x = action.payload.data.filter((i) => Number(i.price) > action.payload.main.froMain)
            } else if (action.payload.main.froMain && action.payload.main.mainTo) {
                x = action.payload.data.filter((i) => Number(i.price) > action.payload.main.froMain && Number(i.price) < action.payload.main.mainTo)
            } else if (!action.payload.main.froMain && !action.payload.main.mainTo && action.payload.main.arrangementMain) {
                x = action.payload.data.filter((i) => i.productType == action.payload.main.arrangementMain)
            } else if (action.payload.main.froMain && action.payload.main.arrangementMain) {
                x = action.payload.data.filter((i) => i.productType == action.payload.main.arrangementMain && Number(i.price) > action.payload.main.froMain)
            } else if (action.payload.main.mainTo && action.payload.main.arrangementMain) {
                x = action.payload.data.filter((i) => i.productType == action.payload.main.arrangementMain && Number(i.price) < action.payload.main.mainTo)
            } else if (action.payload.main.mainTo && action.payload.main.arrangementMain && action.payload.main.froMain) {
                x = action.payload.data.filter((i) => i.productType == action.payload.main.arrangementMain && Number(i.price) < action.payload.main.mainTo && Number(i.price) > action.payload.main.froMain)
            }

            return {...state, filterData: x, productData: action.payload.data}

        case BASKET_DATA:

            const dataMain = [...state.basketData, action.payload.item]

            return {...state, basketData: dataMain}

        case BASKETFILTER_DATA:
            let xx;
            if (action.payload.id && state.basketData !== undefined) {
                xx = state.basketData.filter((i) => {
                    return i.id !== action.payload.id
                })
            } else {
                console.log('aaa')
            }

            return {...state, basketData: xx}

        case SWISH_DATA:
            const swishDataMain = [...state.swishData, action.payload.item];

            localStorage.setItem('swish', JSON.stringify(swishDataMain));

            return {...state, swishData: swishDataMain}

        case SWISHFILTER_DATA:
            
            let swishRemove;
            if (action.payload.id && state.swishData !== undefined) {
                swishRemove = state.swishData.filter((i) => {
                    return i.id !== action.payload.id
                })
            }

            localStorage.setItem('swish', JSON.stringify(swishRemove));

            return {...state, swishData: swishRemove}

        default:
            return state
    }
}