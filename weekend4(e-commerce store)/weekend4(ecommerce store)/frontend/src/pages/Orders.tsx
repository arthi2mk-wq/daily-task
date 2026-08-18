import { useEffect, useState } from "react";
import { getOrders } from "../api/api";
import type { Order } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState("");
  useEffect(() => { getOrders().then(setOrders).catch(e=>setError(e.message)); }, []);

  return <div className="mx-auto max-w-5xl px-4 py-8">
    <h1 className="text-3xl font-bold">Order History</h1>
    {error && <p className="mt-5 text-red-600">{error}</p>}
    {!orders.length && !error && <p className="mt-8 text-gray-500">No orders found.</p>}
    <div className="mt-8 space-y-5">
      {orders.map(order => <Card key={order.id}>
        <CardHeader><CardTitle>Order #{order.id}</CardTitle></CardHeader>
        <CardContent>
          <p>Total: ₹{Number(order.totalAmount).toLocaleString("en-IN")}</p>
          <p>Discount: ₹{Number(order.discountAmount).toLocaleString("en-IN")}</p>
          <p>Status: {order.status}</p>
          <p>Payment: {order.paymentStatus}</p>
          <p>Date: {new Date(order.createdAt).toLocaleString("en-IN")}</p>
          {order.items?.length ? <div className="mt-4 border-t pt-4">
            {order.items.map(item => <p key={item.id}>{item.product.name} × {item.quantity} — ₹{Number(item.unitPrice).toLocaleString("en-IN")}</p>)}
          </div> : null}
        </CardContent>
      </Card>)}
    </div>
  </div>;
}
