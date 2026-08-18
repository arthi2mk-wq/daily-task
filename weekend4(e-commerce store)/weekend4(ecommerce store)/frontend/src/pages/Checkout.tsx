import {
  FormEvent,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "@tanstack/react-router";

import { placeOrder } from "../api/api";

import { useCart } from "../context/CartContext";

import { Button } from "../components/ui/button";

import { Input } from "../components/ui/input";


export default function Checkout() {

  const navigate = useNavigate();

  const {
    total,
    cart,
    refreshCart,
  } = useCart();


  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    couponCode: "",
    paymentMethod: "mock",
  });


  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  async function submit(
    e: FormEvent
  ) {

    e.preventDefault();

    setError("");


    const token =
      localStorage.getItem("token");

    if (!token) {
      setError(
        "Please login before placing an order."
      );

      return;
    }


    if (!cart.length) {

      setError(
        "Your cart is empty."
      );

      return;
    }


    if (!form.name.trim()) {

      setError(
        "Please enter your full name."
      );

      return;
    }


    if (!form.phone.trim()) {

      setError(
        "Please enter your phone number."
      );

      return;
    }



    if (
      !/^[0-9]{10}$/.test(
        form.phone.trim()
      )
    ) {

      setError(
        "Please enter a valid 10-digit phone number."
      );

      return;
    }


    if (!form.address.trim()) {

      setError(
        "Please enter your delivery address."
      );

      return;
    }


    try {

      setLoading(true);



      await placeOrder({

        shippingName:
          form.name.trim(),

        shippingPhone:
          form.phone.trim(),

        shippingAddress:
          form.address.trim(),

        couponCode:
          form.couponCode.trim()
            ? form.couponCode.trim()
            : undefined,

        paymentMethod:
          form.paymentMethod,
      });

      await refreshCart();


      alert(
        "Order placed successfully!"
      );


      navigate({
        to: "/orders",
      });


    } catch (err) {

      setError(
        err instanceof Error
          ? err.message
          : "Checkout failed"
      );

    } finally {

      setLoading(false);

    }
  }


  return (

    <div className="mx-auto max-w-2xl px-4 py-8">

      
      <Link to="/cart">

        <Button variant="outline">

          ← Back to Cart

        </Button>

      </Link>


      

      <h1 className="mt-6 text-3xl font-bold">

        Checkout

      </h1>


      

      <form
        onSubmit={submit}
        className="mt-8 space-y-4 rounded-xl border p-6"
      >


        

        <Input
          placeholder="Full name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          required
        />


       
        <Input
          type="tel"
          placeholder="Phone number"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
          maxLength={10}
          required
        />


        

        <textarea
          className="min-h-28 w-full rounded-md border p-3"
          placeholder="Delivery address"
          value={form.address}
          onChange={(e) =>
            setForm({
              ...form,
              address: e.target.value,
            })
          }
          required
        />


       

        <Input
          placeholder="Coupon code (SAVE10 or FLAT500)"
          value={form.couponCode}
          onChange={(e) =>
            setForm({
              ...form,
              couponCode:
                e.target.value.toUpperCase(),
            })
          }
        />


        

        <select
          className="w-full rounded-md border p-2"
          value={form.paymentMethod}
          onChange={(e) =>
            setForm({
              ...form,
              paymentMethod:
                e.target.value,
            })
          }
        >

          <option value="mock">
            Mock Payment
          </option>

        </select>


        

        {error && (

          <p className="text-red-600">

            {error}

          </p>

        )}


        
        <div className="flex justify-between font-bold">

          <span>
            Cart total
          </span>

          <span>
            ₹
            {total.toLocaleString(
              "en-IN"
            )}
          </span>

        </div>


       

        <Button
          type="submit"
          disabled={
            loading ||
            !cart.length
          }
          className="w-full"
        >

          {loading
            ? "Processing..."
            : "Place Order"}

        </Button>

      </form>

    </div>

  );
}