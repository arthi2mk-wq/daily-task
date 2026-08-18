import { Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";

export default function Cart() {
  const { cart, total, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return <div className="mx-auto max-w-5xl px-4 py-8">
    <Link to="/products"><Button variant="outline">← Continue Shopping</Button></Link>
    <h1 className="mt-6 text-3xl font-bold">Shopping Cart</h1>
    {!cart.length ? <div className="mt-10 rounded-xl border p-12 text-center">
      <ShoppingCart className="mx-auto h-12 w-12"/>
      <p className="mt-4 text-gray-500">Your cart is empty.</p>
      <Link to="/products"><Button className="mt-5">View Products</Button></Link>
    </div> : <div className="mt-8 space-y-4">
      {cart.map(item => <div key={item.id} className="flex gap-5 rounded-xl border p-4">
        <img src={item.product.imageUrl || ""} className="h-28 w-28 rounded object-cover" alt={item.product.name}/>
        <div className="flex-1">
          <p className="text-sm text-gray-500">{item.product.category?.name}</p>
          <h2 className="text-xl font-semibold">{item.product.name}</h2>
          <p className="font-bold">₹{Number(item.product.price).toLocaleString("en-IN")}</p>
          <div className="mt-3 flex items-center gap-2">
            <Button size="icon" variant="outline" onClick={()=>decreaseQuantity(item.id)}><Minus/></Button>
            <span>{item.quantity}</span>
            <Button size="icon" variant="outline" onClick={()=>increaseQuantity(item.id)}><Plus/></Button>
            <Button size="icon" variant="destructive" onClick={()=>removeFromCart(item.id)}><Trash2/></Button>
          </div>
        </div>
        <div className="font-bold">₹{(Number(item.product.price)*item.quantity).toLocaleString("en-IN")}</div>
      </div>)}
      <div className="rounded-xl border p-6">
        <div className="flex justify-between text-xl font-bold"><span>Total</span><span>₹{total.toLocaleString("en-IN")}</span></div>
        <Link to="/checkout"><Button className="mt-5 w-full">Checkout</Button></Link>
      </div>
    </div>}
  </div>;
}
