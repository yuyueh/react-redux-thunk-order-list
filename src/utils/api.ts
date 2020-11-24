import axois from 'axios';
import { Order } from '../store/order/types/models';

export const fetchOrder = () =>
    axois.get<{ orders: Order[] }>(
        `${process.env.REACT_APP_API_URL}f1645b2c-2625-43b2-9a5c-3f9bc489d677`
    );
