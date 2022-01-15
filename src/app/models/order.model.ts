
    export interface OrderDetail {
        orderDetailId: string;
        productId: string;
        productName: string;
        quantity: string;
        unityPrice: string;
        totalAmount: string;
        createdAt: string;
    }

    export interface Order {
        id: string;
        orderNumber: string;
        customer: string;
        state: number;
        createdAt: string;
        subTotal: string;
        totalCityTax: string;
        totalCountTax: string;
        totalStateTax: string;
        totalFederalTax: string;
        totalTax: string;
        total: string;
        OrderDetail: OrderDetail[];
    }

    export interface Orders {
        orders: Order[];
    }



