import { useEffect, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { getProduct } from "../api/api";
import { useCart } from "../context/CartContext";
import type { Product } from "../types";
import { Button } from "../components/ui/button";

export default function ProductDetails() {
  const { productId } = useParams({ from: "/products/$productId" });
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => { getProduct(Number(productId)).then(setProduct).catch(e=>setError(e.message)); }, [productId]);

  if (error) return <div className="p-10 text-center text-red-600">{error}</div>;
  if (!product) return <div className="p-10 text-center">Loading...</div>;

  async function add() {
    try { await addToCart(product.id, quantity); alert(`${quantity} ${product.name} added to cart`); }
    catch (e) { setError(e instanceof Error ? e.message : "Unable to add to cart"); }
  }

  return <div className="mx-auto max-w-6xl px-4 py-8">
    <Link to="/products"><Button variant="outline">← Back</Button></Link>
    <div className="mt-8 grid overflow-hidden rounded-xl border md:grid-cols-2">
      <img src={product.imageUrl || ""} alt={product.name} className="h-full min-h-96 w-full object-cover"/>
      <div className="p-8">
        <p className="text-sm text-gray-500">{product.category?.name}</p>
        <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>
        <p className="mt-5 leading-7 text-gray-600">{product.description}</p>
        <p className="mt-6 text-3xl font-bold">₹{Number(product.price).toLocaleString("en-IN")}</p>
        <p className="mt-3">Available stock: <b>{product.stock}</b></p>
        <div className="mt-6 flex items-center gap-3">
          <Button variant="outline" onClick={()=>setQuantity(q=>Math.max(1,q-1))}>-</Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button variant="outline" onClick={()=>setQuantity(q=>Math.min(product.stock,q+1))}>+</Button>
        </div>
        {error && <p className="mt-4 text-red-600">{error}</p>}
        <Button className="mt-6 w-full" disabled={product.stock < 1} onClick={add}>Add to Cart</Button>
        <Link to="/cart"><Button variant="outline" className="mt-3 w-full">Go to Cart</Button></Link>
      </div>
    </div>
  </div>;
}
