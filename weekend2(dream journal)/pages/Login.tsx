import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Please enter Email and Password");
      return;
    }
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (email === user.email && password === user.password) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful");
      navigate({
        to: "/dashboard",
      });
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-indigo-950 flex items-center justify-center px-4 py-8">
      <div className="absolute  h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 " />
      <Card className="relative z-10 w-full max-w-md rounded-3xl border border-violet-500/40 bg-white/10 backdrop-blur-xl shadow-2xl shadow-violet-900/30 p-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Dream Journal  </h1>
          <p className="mt-3 text-gray-300 text-sm md:text-base">
            Capture your dreams.  </p>
          <p className="text-gray-300 text-sm md:text-base">  Understand your mind.  </p>
        </div>
        <form  onSubmit={handleLogin}  className="mt-8 space-y-5"  >
          <div>
            <Label  htmlFor="email"  className="text-white"  >  Email  </Label>
            <div className="relative mt-2">
              <Mail  size={18}  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"  />
              <Input  id="email"  type="email"  placeholder="Enter your email"
                value={email}  onChange={(e) => setEmail(e.target.value)}
                className="h-11 pl-10 bg-white/10 border-violet-400/40 text-white placeholder:text-gray-400"  />
            </div>
          </div>
          <div>
            <Label  htmlFor="password"  className="text-white"  >  Password  </Label>
            <div className="relative mt-2">
              <Lock  size={18}  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"  />
              <Input  id="password"  type={showPassword ? "text" : "password"}  placeholder="Enter your password"  value={password}  onChange={(e) => setPassword(e.target.value)}
                className="h-11 pl-10 pr-10 bg-white/10 border-violet-400/40 text-white placeholder:text-gray-400"  />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label  htmlFor="remember"  className="text-gray-300"  >  Remember Me  </Label>
            </div>
            <button  type="button"  className="text-sm text-violet-300 hover:text-white transition"  >  Forgot Password?  </button>
          </div>
          <Button
            type="submit"
            className="w-full h-11 rounded-xl bg-violet-600  "  >  Login  </Button>
          <p className="text-center text-sm text-gray-300">  Don't have an account?  <Link  to="/signup"  className="ml-2 font-semibold text-violet-300 hover:text-white" >Sign Up</Link>  </p>
        </form>
      </Card>
    </div>
  );
}