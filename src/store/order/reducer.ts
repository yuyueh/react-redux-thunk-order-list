import { AnyAction } from 'redux';
import * as constants from './types/constants';
import { OrderSate } from './types/models';

const defaultState: OrderSate = {
    isLoading: false,
    orderListing: [],
    error: null,
};

const fetchOrderListSuccess = (
    state: OrderSate,
    { orderListing }: AnyAction
) => {
    return {
        ...state,
        isLoading: false,
        orderListing,
        error: undefined,
    };
};

const fetchOrderListFail = (state: OrderSate, { error }: AnyAction) => {
    return {
        ...state,
        isLoading: false,
        orderListing: [],
        error,
    };
};

const reducer = (state = defaultState, action: AnyAction) => {
    switch (action.type) {
        case constants.FETCHING_DATA:
            return { ...defaultState, isLoading: true };
        case constants.FETCH_SUCCESS:
            return fetchOrderListSuccess(state, action);
        case constants.FETCH_FAIL:
            return fetchOrderListFail(state, action);
        default:
            return state;
    }
};

export default reducer;
