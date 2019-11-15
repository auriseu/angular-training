import {ProductSize} from './ProductSize';

export interface Product {
  id: number;
  name: string;
  price: number;
  size: ProductSize;
  image?: string;
  description: string;
}
