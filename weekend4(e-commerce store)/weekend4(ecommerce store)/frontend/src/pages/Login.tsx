import { FormEvent, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { loginUser } from "../api/api";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault(); setError("");
    if (!email || !password) return setError("Email and password are required");
    try {
      setLoading(true);
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("loggedInUser", JSON.stringify(data.user));
      navigate({ to: data.user.role === "admin" ? "/admin" : "/" });
      window.location.reload();
    } catch (err) { setError(err instanceof Error ? err.message : "Login failed"); }
    finally { setLoading(false); }
  }

  return <div className="flex min-h-screen items-center justify-center px-4">
    <Card className="w-full max-w-md"><CardHeader><CardTitle>Login</CardTitle></CardHeader><CardContent>
      <form onSubmit={submit} className="space-y-4">
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button disabled={loading} className="w-full">{loading ? "Logging in..." : "Login"}</Button>
        <p className="text-center text-sm">Don't have an account? <Link to="/register" className="underline">Register</Link></p>
      </form>
    </CardContent></Card>
  </div>;
}
