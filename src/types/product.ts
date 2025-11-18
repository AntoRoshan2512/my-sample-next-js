export interface ProductColor {
  name: string;
  code: string;
}

export interface Product {
  id: string | number;
  name: string;
  title?: string; // Alias for name
  slug: string;
  description?: string;
  image: string;
  thumbnail?: string;
  gallery?: string[];
  price: number;
  sale_price?: number;
  colors?: ProductColor[];
  sizes?: string[] | number[];
  category?: string;
  tags?: string[];
  rating?: number;
  totalReviews?: number;
  stock?: number;
  [key: string]: any;
}