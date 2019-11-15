import {Product} from '../../products/components/products-list/entities/Product';

export interface CheckoutData {
  id?: number;
  products: Product[];
  fullName: string;
  email: string;
  street: string;
  cardNumber: string;
}
