import React from 'react';
import styled from 'styled-components';
import { Order } from '../store/order/types/models';
import { OrderEnum } from '../store/order/types/enums';
import { formateDateString } from '../utils/common';

interface IOrderProps {
    order: Order;
}

interface IOrderStateProps {
    isCompleted: boolean;
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #8080803d;
`;

const CoverImgBox = styled.div`
    width: 140px;
`;

const CoverImgWrapper = styled.div`
    padding: 24px 20px;
`;

const CoverImgItem = styled.img`
    width: 100px;
    ${(props: IOrderStateProps) =>
        props.isCompleted ? 'filter: grayscale(100%)' : ''}
`;

const DetailBox = styled.div`
    flex-grow: 1;
    padding: 18px 0px;
`;

const DetailHeader = styled.div`
    margin-bottom: 18px;
    font-size: large;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
`;

const StatusInfo = styled.div`
    color: ${(props: IOrderStateProps) =>
        props.isCompleted ? 'black' : 'green'};
`;

const ShippingDateInfo = styled.div``;

const DetailBody = styled.div`
    font-size: medium;
`;

const DetailButtonBox = styled.a`
    min-width: 36px;
    display: flex;
    align-items: center;
`;

const RightArrow = styled.div`
    width: 16px;
    height: 16px;
    border-top: 3px solid #7a7a7a;
    border-right: 3px solid #7a7a7a;
    transform: rotate(45deg);
`;

const OrderInfoComponent: React.FC<IOrderProps> = ({ order }) => {
    const isCompleted = [OrderEnum.Delivered, OrderEnum.Cancelled].some(
        (e) => e === order.status?.code
    );
    return (
        <Wrapper>
            <CoverImgBox>
                <CoverImgWrapper>
                    <CoverImgItem
                        isCompleted={isCompleted}
                        src={order.logo}
                    ></CoverImgItem>
                </CoverImgWrapper>
            </CoverImgBox>
            <DetailBox>
                <DetailHeader>
                    <StatusInfo isCompleted={isCompleted}>
                        {order.status?.type}
                    </StatusInfo>
                    {true ? (
                        <ShippingDateInfo>
                            預計出貨日 : {formateDateString(order.date)}
                        </ShippingDateInfo>
                    ) : undefined}
                </DetailHeader>
                <DetailBody>{order.name}</DetailBody>
            </DetailBox>
            <DetailButtonBox href="#">
                <RightArrow></RightArrow>
            </DetailButtonBox>
        </Wrapper>
    );
};

export default OrderInfoComponent;
