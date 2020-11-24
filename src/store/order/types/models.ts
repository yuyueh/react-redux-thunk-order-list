import { OrderEnum } from './enums';

export interface OrderStatus {
    code: OrderEnum;
    type: string;
}

export interface Order {
    name: string;
    logo: string;
    status: OrderStatus;
    date: string;
}

export interface OrderSate {
    orderListing: Order[];
    isLoading: boolean;
    error: string | null;
}
