import { useEffect, useState } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { Search, ShoppingCart } from "lucide-react";
import { getCategories, getProducts } from "../api/api";
import { useCart } from "../context/CartContext";
import type { Category, Product } from "../types";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export default function Products() {
  const search = useSearch({ from: "/products" });
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(search.category || "all");
  const [price, setPrice] = useState("all");
  const [error, setError] = useState("");

  useEffect(() => { getCategories().then(setCategories).catch(() => {}); }, []);
  useEffect(() => {
    let minPrice: number | undefined, maxPrice: number | undefined;
    if (price === "under10") maxPrice = 9999;
    if (price === "10to40") { minPrice = 10000; maxPrice = 40000; }
    if (price === "above40") minPrice = 40001;

    getProducts({ search: query, category, minPrice, maxPrice })
      .then(setProducts).catch(e => setError(e.message));
  }, [query, category, price]);

  async function add(product: Product) {
    try { await addToCart(product.id); alert(`${product.name} added to cart`); }
    catch (e) { setError(e instanceof Error ? e.message : "Please login first"); }
  }

  return <div className="mx-auto max-w-7xl px-4 py-8">
    <Link to="/"><Button variant="outline">← Home</Button></Link>
    <h1 className="mt-6 text-4xl font-bold">Our Products</h1>
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <div className="relative"><Search className="absolute left-3 top-3 h-4 w-4"/><Input className="pl-9" placeholder="Search products..." value={query} onChange={e=>setQuery(e.target.value)}/></div>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger><SelectValue placeholder="Category"/></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map(c => <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={price} onValueChange={setPrice}>
        <SelectTrigger><SelectValue placeholder="Price"/></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Prices</SelectItem>
          <SelectItem value="under10">Under ₹10,000</SelectItem>
          <SelectItem value="10to40">₹10,000 - ₹40,000</SelectItem>
          <SelectItem value="above40">Above ₹40,000</SelectItem>
        </SelectContent>
      </Select>
    </div>
    {error && <p className="mt-4 text-red-600">{error}</p>}
    <p className="mt-5 text-sm text-gray-500">Showing {products.length} products</p>
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(product => <div key={product.id} className="overflow-hidden rounded-xl border bg-white">
        <img src={product.imageUrl || ""} alt={product.name} className="h-52 w-full object-cover"/>
        <div className="p-5">
          <p className="text-sm text-gray-500">{product.category?.name}</p>
          <h2 className="mt-2 font-semibold">{product.name}</h2>
          <p className="mt-2 text-xl font-bold">₹{Number(product.price).toLocaleString("en-IN")}</p>
          <p className="mt-2 text-sm text-gray-500">Stock: {product.stock}</p>
          <div className="mt-5 space-y-2">
            <Link to="/products/$productId" params={{ productId: String(product.id) }}><Button variant="outline" className="w-full">View Details</Button></Link>
            <Button className="w-full" disabled={product.stock < 1} onClick={()=>add(product)}><ShoppingCart className="mr-2 h-4 w-4"/>Add to Cart</Button>
          </div>
        </div>
      </div>)}
    </div>
  </div>;
}
