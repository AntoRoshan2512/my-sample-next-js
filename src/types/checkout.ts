export interface Address {
  id?: string;
  title?: string;
  name?: string;
  customerName?: string; // Alias for name
  phoneNumber: string;
  street: string;
  city: string;
  state?: string;
  country: string;
  zip: string;
}

export interface Coupon {
  id: string;
  code: string;
  discount?: number;
  amount?: number; // Alias for discount
  type: 'percentage' | 'fixed';
  expiryDate?: string;
}