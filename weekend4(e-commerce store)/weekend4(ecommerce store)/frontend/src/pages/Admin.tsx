import { FormEvent, useEffect, useState } from "react";
import { createProduct, getAdminOrders, getCategories, updateAdminOrderStatus } from "../api/api";
import type { Category, Order } from "../types";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Admin() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ name:"", description:"", price:"", stock:"", imageUrl:"", categoryId:"" });

  async function load() {
    try {
      setOrders(await getAdminOrders());
      setCategories(await getCategories());
    } catch (e) { setMessage(e instanceof Error ? e.message : "Admin access denied"); }
  }
  useEffect(() => { load(); }, []);

  async function create(e: FormEvent) {
    e.preventDefault();
    try {
      await createProduct({ ...form, price:Number(form.price), stock:Number(form.stock), categoryId:Number(form.categoryId) });
      setMessage("Product created");
      setForm({name:"",description:"",price:"",stock:"",imageUrl:"",categoryId:""});
    } catch(e) { setMessage(e instanceof Error ? e.message : "Failed"); }
  }

  async function status(id:number, value:string) {
    await updateAdminOrderStatus(id,value);
    await load();
  }

  return <div className="mx-auto max-w-7xl px-4 py-8">
    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
    {message && <p className="mt-3 text-sm">{message}</p>}

    <section className="mt-8 rounded-xl border p-6">
      <h2 className="text-xl font-bold">Add Product</h2>
      <form onSubmit={create} className="mt-4 grid gap-3 md:grid-cols-2">
        <Input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
        <Input placeholder="Price" type="number" value={form.price} onChange={e=>setForm({...form,price:e.target.value})}/>
        <Input placeholder="Stock" type="number" value={form.stock} onChange={e=>setForm({...form,stock:e.target.value})}/>
        <Input placeholder="Image URL" value={form.imageUrl} onChange={e=>setForm({...form,imageUrl:e.target.value})}/>
        <select className="rounded-md border p-2" value={form.categoryId} onChange={e=>setForm({...form,categoryId:e.target.value})}>
          <option value="">Select category</option>{categories.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <textarea className="rounded-md border p-3 md:col-span-2" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/>
        <Button className="md:col-span-2">Create Product</Button>
      </form>
    </section>

    <section className="mt-8">
      <h2 className="text-xl font-bold">All Orders</h2>
      <div className="mt-4 space-y-4">
        {orders.map(order => <div key={order.id} className="rounded-xl border p-5">
          <div className="flex flex-wrap justify-between gap-3">
            <div><b>Order #{order.id}</b><p>{order.shippingName} — {order.shippingPhone}</p><p>₹{Number(order.totalAmount).toLocaleString("en-IN")}</p></div>
            <select className="rounded-md border p-2" value={order.status} onChange={e=>status(order.id,e.target.value)}>
              {["pending","confirmed","processing","shipped","delivered","cancelled"].map(s=><option key={s}>{s}</option>)}
            </select>
          </div>
        </div>)}
      </div>
    </section>
  </div>;
}
