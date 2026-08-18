import { Link } from "@tanstack/react-router";
import { ShoppingCart, Package, LogOut, Shield } from "lucide-react";
import { Button } from "./ui/button";
import CartDrawer from "./CartDrawer";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const user = JSON.parse(localStorage.getItem("loggedInUser") || "null");

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
  }

  return <nav className="border-b bg-white">
    <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4">
      <Link to="/" className="text-xl font-bold">QuickCart</Link>
      <div className="flex items-center gap-4 text-sm">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {user && <CartDrawer/>}
        {user && <Link to="/orders" className="flex items-center gap-1"><Package className="h-4 w-4"/>Orders</Link>}
        {user?.role === "admin" && <Link to="/admin" className="flex items-center gap-1"><Shield className="h-4 w-4"/>Admin</Link>}
        {user ? <Button size="sm" variant="outline" onClick={logout}><LogOut className="mr-1 h-4 w-4"/>Logout</Button>
              : <Link to="/login"><Button size="sm">Login</Button></Link>}
      </div>
    </div>
  </nav>;
}
