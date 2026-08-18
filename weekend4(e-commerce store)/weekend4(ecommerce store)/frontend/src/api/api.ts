import type {
  Category,
  CartItem,
  Order,
  Product,
} from "../types";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:3000";


async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem("token");

  const headers = new Headers(options.headers);

  headers.set("Content-Type", "application/json");

  if (token) {
    headers.set(
      "Authorization",
      `Bearer ${token}`
    );
  }

  const response = await fetch(
    `${API_URL}${path}`,
    {
      ...options,
      headers,
    }
  );

  const data = await response
    .json()
    .catch(() => ({}));

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("loggedInUser");
    }

    throw new Error(
      data.message ||
        data.error ||
        "Request failed"
    );
  }

  return data;
}


export const registerUser = (body: {
  name: string;
  email: string;
  password: string;
}) =>
  request<{
    message: string;
    user: unknown;
  }>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(body),
  });


export const loginUser = (
  email: string,
  password: string
) =>
  request<{
    token: string;
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
    };
  }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });


export const getCategories = async () => {
  const response = await request<{
    categories: Category[];
  }>("/api/categories");

  return response.categories;
};

export async function getProducts(
  params: {
    search?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
  } = {}
) {
  const query = new URLSearchParams();

  if (params.search) {
    query.set(
      "search",
      params.search
    );
  }

  if (
    params.category &&
    params.category !== "all"
  ) {
    query.set(
      "category",
      params.category
    );
  }

  if (
    params.minPrice !== undefined
  ) {
    query.set(
      "minPrice",
      String(params.minPrice)
    );
  }

  if (
    params.maxPrice !== undefined
  ) {
    query.set(
      "maxPrice",
      String(params.maxPrice)
    );
  }

  const queryString =
    query.toString();

  const url = queryString
    ? `/api/products?${queryString}`
    : "/api/products";

  const response = await request<{
    products: Product[];
  }>(url);

  return response.products;
}


export const getProduct = async (
  id: number
) => {
  const response =
    await request<{
      product: Product;
    }>(`/api/products/${id}`);

  return response.product;
};


export const getCart = () =>
  request<{
    cart: CartItem[];
    total: number;
  }>("/api/cart");


export const addCartItem = (
  productId: number,
  quantity = 1
) =>
  request<{
    cart: CartItem;
  }>("/api/cart", {
    method: "POST",
    body: JSON.stringify({
      productId,
      quantity,
    }),
  });


export const updateCartItem = (
  id: number,
  quantity: number
) =>
  request<{
    cart: CartItem;
  }>(`/api/cart/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      quantity,
    }),
  });


export const deleteCartItem = (
  id: number
) =>
  request<{
    message: string;
  }>(`/api/cart/${id}`, {
    method: "DELETE",
  });


export interface PlaceOrderData {
  shippingName: string;
  shippingAddress: string;
  shippingPhone: string;
  couponCode?: string;
  paymentMethod?: string;
}


export const placeOrder = (
  body: PlaceOrderData
) =>
  request<{
    message: string;
    order: Order;
  }>("/api/orders", {
    method: "POST",
    body: JSON.stringify(body),
  });



export const getOrders =
  async () => {
    const response =
      await request<{
        orders: Order[];
      }>("/api/orders");

    return response.orders;
  };


export const getOrder = async (
  id: number
) => {
  const response =
    await request<{
      order: Order;
    }>(`/api/orders/${id}`);

  return response.order;
};

export const getAdminOrders =
  async () => {
    const response =
      await request<{
        orders: Order[];
      }>("/api/admin/orders");

    return response.orders;
  };


export const updateAdminOrderStatus = (
  id: number,
  status: string
) =>
  request<{
    order: Order;
  }>(
    `/api/admin/orders/${id}/status`,
    {
      method: "PUT",
      body: JSON.stringify({
        status,
      }),
    }
  );


export const createProduct = (
  body: Partial<Product>
) =>
  request<{
    product: Product;
  }>("/api/products", {
    method: "POST",
    body: JSON.stringify(body),
  });


export const deleteProduct = (
  id: number
) =>
  request<{
    message: string;
  }>(
    `/api/products/${id}`,
    {
      method: "DELETE",
    }
  );