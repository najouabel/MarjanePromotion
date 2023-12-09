import { Product } from "./Product";

export interface PromotionProduct {
    uuid: string;
    percentage: number;
    status: 'approved' | 'pending' | 'denied';
    product: Product
}

