import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import OrderListing from '../components/OrderListing';
import { fetchOrderListing } from '../store/order/actionCreators';
import { RootState } from '../store/types/models';
import { debounce } from '../utils/common';

const Wrapper = styled.div`
    max-width: 900px;
    min-width: 400px;
    width: 70%;
    margin: 0 auto;
`;

const delay = 300;

const HomeComponent = () => {
    const dispatch = useDispatch();
    const orderListing = useSelector(
        (state: RootState) => state.order.orderListing
    );
    const isLoading = useSelector((state: RootState) => state.order.isLoading);
    const debouncedFetch = useRef(
        debounce(() => dispatch(fetchOrderListing()), delay)
    ).current;
    const handleClick = () => {
        debouncedFetch();
    };

    useEffect(() => {
        dispatch(fetchOrderListing());
    }, [dispatch]);

    return (
        <Wrapper>
            <button onClick={handleClick}>reload</button>
            <OrderListing
                orderListing={orderListing}
                isLoading={isLoading}
            ></OrderListing>
        </Wrapper>
    );
};

export default HomeComponent;
