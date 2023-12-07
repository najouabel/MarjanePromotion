export interface PromotionProduct {
    uuid: string;
    percentage: number;
    status: 'approved' | 'pending' | 'denied';
}

