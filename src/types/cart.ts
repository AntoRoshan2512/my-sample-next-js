import type { Product } from './product';

export interface CartItem extends Partial<Product> {
  id: string | number;
  name?: string;
  slug?: string;
  image?: string;
  price: number;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface CartState {
  items: CartItem[];
  isEmpty: boolean;
  totalItems: number;
  totalUniqueItems: number;
  total: number;
}