export interface Article {
  id: string;
  name: string;
  imageUrl: string;
  currentPrice: number;
  previousPrice: number;
  rating: number;
  reviewCount: number;
  deliveryDate: Date;
  deliveryPrice: number;
  otherShippingOptions: boolean;
}
