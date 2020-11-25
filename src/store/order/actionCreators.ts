import * as constants from './types/constants';
import { Order } from './types/models';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import * as API from '../../utils/api';

const fetchingOrder = () => ({
    type: constants.FETCHING_DATA,
});

const fetchOrderSuccess = (orders: Order[]) => ({
    type: constants.FETCH_SUCCESS,
    orderListing: orders,
});

const fetchOrderFail = (error: Error) => ({
    type: constants.FETCH_FAIL,
    error: error,
});

export const fetchOrderListing = (): ThunkAction<
    Promise<void>,
    {},
    {},
    AnyAction
> => {
    return async (
        dispatch: ThunkDispatch<{}, {}, AnyAction>
    ): Promise<void> => {
        dispatch(fetchingOrder());
        try {
            const { data } = await API.fetchOrder();
            dispatch(fetchOrderSuccess(data.orders));
        } catch (e) {
            console.error(e);
            dispatch(fetchOrderFail(e.message));
        }
    };
};
