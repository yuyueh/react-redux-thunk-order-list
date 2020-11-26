import React from 'react';
import styled from 'styled-components';
import { Order } from '../store/order/types/models';
import { OrderEnum } from '../store/order/types/enums';
import OrderInfo from './OrderInfo';
import LoadingComponent from './Loading';

interface IOrderListingProps {
    orderListing: Order[];
    isLoading: boolean;
}

const Wrapper = styled.div`
    border: #8080803d solid 1px;
    font-size: large;
`;

const OrderCategory = styled.div`
    padding: 15px 20px;
    background: #6969691f;
`;

const CategoryTitle = styled.div`
    border-left: green solid 5px;
    padding-left: 10px;
    font-weight: 800;
`;

const filterProcessingOrder = (o: Order) =>
    o.status.code === OrderEnum.Processing ||
    o.status.code === OrderEnum.Established;

const filterCompletedOrder = (o: Order) =>
    o.status.code === OrderEnum.Delivered ||
    o.status.code === OrderEnum.Cancelled;

const orderByDateByDesc = (a: Order, b: Order) =>
    new Date(a.date) > new Date(b.date) ? -1 : 1;

const OrderListingComponent: React.FC<IOrderListingProps> = ({
    orderListing,
    isLoading,
}) => {
    const processingOrderListing = orderListing
        .filter(filterProcessingOrder)
        .sort(orderByDateByDesc);

    const completedOrderListing = orderListing
        .filter(filterCompletedOrder)
        .sort(orderByDateByDesc);

    return (
        <Wrapper>
            <OrderCategory>
                <CategoryTitle>進行中</CategoryTitle>
            </OrderCategory>
            {isLoading ? (
                <LoadingComponent></LoadingComponent>
            ) : (
                processingOrderListing.map((o, i) => (
                    <OrderInfo key={i} order={o}></OrderInfo>
                ))
            )}
            <OrderCategory>
                <CategoryTitle>已完成</CategoryTitle>
            </OrderCategory>
            {isLoading ? (
                <LoadingComponent></LoadingComponent>
            ) : (
                completedOrderListing.map((o, i) => (
                    <OrderInfo key={i} order={o}></OrderInfo>
                ))
            )}
        </Wrapper>
    );
};

export default OrderListingComponent;
