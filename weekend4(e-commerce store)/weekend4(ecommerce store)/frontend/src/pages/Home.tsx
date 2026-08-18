import { Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";

const categories = ["Laptop", "Mobile", "Accessories", "Tablet", "Smartwatch"];

export default function Home() {
  return <div className="min-h-screen">
    <section className="bg-gray-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <p className="font-semibold">Welcome to QuickCart</p>
          <h1 className="mt-3 text-5xl font-bold">Shop your favourite products</h1>
          <p className="mt-5 text-gray-600">Laptops, mobiles, accessories, tablets and smartwatches in one place.</p>
          <Link to="/products"><Button className="mt-6">Shop Now</Button></Link>
        </div>
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" className="h-80 w-full rounded-xl object-cover" alt="Online store"/>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="text-center text-3xl font-bold">Shop by Category</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map(c => <Link key={c} to="/products" search={{ category: c }} className="rounded-xl border p-6 text-center hover:shadow-lg">
          <h3 className="text-xl font-semibold">{c}</h3>
          <p className="mt-2 text-sm text-gray-500">Explore {c.toLowerCase()}</p>
        </Link>)}
      </div>
    </section>
  </div>;
}
