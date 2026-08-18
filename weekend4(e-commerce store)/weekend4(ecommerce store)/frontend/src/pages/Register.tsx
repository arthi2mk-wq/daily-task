import { FormEvent, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { registerUser } from "../api/api";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault(); setError("");
    try {
      await registerUser(form);
      alert("Registration successful. Please login.");
      navigate({ to: "/login" });
    } catch (err) { setError(err instanceof Error ? err.message : "Registration failed"); }
  }

  return <div className="flex min-h-screen items-center justify-center px-4">
    <Card className="w-full max-w-md"><CardHeader><CardTitle>Create Account</CardTitle></CardHeader><CardContent>
      <form onSubmit={submit} className="space-y-4">
        <Input placeholder="Name" value={form.name} onChange={e => setForm({...form, name:e.target.value})}/>
        <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email:e.target.value})}/>
        <Input type="password" placeholder="Password (min 6 characters)" value={form.password} onChange={e => setForm({...form, password:e.target.value})}/>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button className="w-full">Register</Button>
        <p className="text-center text-sm">Already have an account? <Link to="/login" className="underline">Login</Link></p>
      </form>
    </CardContent></Card>
  </div>;
}
