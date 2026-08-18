export type Category = { id: number; name: string };

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number | string;
  imageUrl?: string | null;
  stock: number;
  categoryId: number;
  category?: Category;
};

export type CartItem = {
  id: number;
  productId: number;
  quantity: number;
  product: Product;
};

export type OrderItem = {
  id: number;
  quantity: number;
  unitPrice: number | string;
  product: Product;
};

export type Order = {
  id: number;
  totalAmount: number | string;
  discountAmount: number | string;
  couponCode?: string | null;
  status: string;
  paymentStatus: string;
  paymentMethod: string;
  shippingName: string;
  shippingAddress: string;
  shippingPhone: string;
  createdAt: string;
  items?: OrderItem[];
};
