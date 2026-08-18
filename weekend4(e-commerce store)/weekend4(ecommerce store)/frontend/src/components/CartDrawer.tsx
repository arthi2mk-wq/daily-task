import { Link } from "@tanstack/react-router";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function CartDrawer() {
  const { cart, total, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return <Sheet>
    <SheetTrigger asChild><Button variant="outline"><ShoppingCart className="mr-2 h-4 w-4"/>Cart ({cart.length})</Button></SheetTrigger>
    <SheetContent>
      <SheetHeader><SheetTitle>Shopping Cart</SheetTitle></SheetHeader>
      <div className="space-y-4">
        {cart.length === 0 && <p className="py-10 text-center text-gray-500">Your cart is empty.</p>}
        {cart.map(item => <div key={item.id} className="flex gap-3 border-b pb-4">
          <img src={item.product.imageUrl || ""} alt={item.product.name} className="h-20 w-20 rounded object-cover"/>
          <div className="flex-1">
            <p className="font-medium">{item.product.name}</p>
            <p>₹{Number(item.product.price).toLocaleString("en-IN")}</p>
            <div className="mt-2 flex items-center gap-2">
              <Button size="icon" variant="outline" onClick={() => decreaseQuantity(item.id)}>-</Button>
              <span>{item.quantity}</span>
              <Button size="icon" variant="outline" onClick={() => increaseQuantity(item.id)}>+</Button>
              <Button size="icon" variant="ghost" onClick={() => removeFromCart(item.id)}><Trash2 className="h-4 w-4"/></Button>
            </div>
          </div>
        </div>)}
      </div>
      {cart.length > 0 && <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-6">
        <div className="flex justify-between text-lg font-bold"><span>Total</span><span>₹{total.toLocaleString("en-IN")}</span></div>
        <Link to="/checkout"><Button className="mt-4 w-full">Checkout</Button></Link>
      </div>}
    </SheetContent>
  </Sheet>;
}
