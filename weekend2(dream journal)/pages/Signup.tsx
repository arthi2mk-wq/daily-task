import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { User, Mail, Lock, Eye, EyeOff,} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }
    if (password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!agree) {
      alert("Please accept Terms & Conditions.");
      return;
    }
    const existingUser = JSON.parse(
      localStorage.getItem("user") || "{}"
    );
    if (existingUser.email === email) {
      alert("Email already registered.");
      return;
    }
    const user = {
      name,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account Created Successfully!");
    navigate({
      to: "/",
    });
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-indigo-950  px-4 py-8">
      <div className="absolute h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute h-80 w-80 rounded-full bg-pink-500/20 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />
      <Card className="relative z-10 w-full max-w-md rounded-3xl border border-violet-500/40 bg-white/10 backdrop-blur-xl p-8 shadow-2xl shadow-violet-900/30">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Dream Journal </h1>
          <p className="mt-2 text-gray-300"> Create your account </p>
        </div>
        <form onSubmit={handleSignup} className="mt-8 space-y-5" >
          <div>
            <Label className="text-white"> Full Name </Label>
            <div className="relative mt-2">
              <User  size={18}  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"  />
              <Input  type="text"  placeholder="Enter your name"
                className="pl-10 h-11 bg-white/10 border-violet-400/40 text-white placeholder:text-gray-400"  value={name}
                onChange={(e) => setName(e.target.value)}  />
            </div>
          </div>
          <div>
            <Label className="text-white">  Email  </Label>
            <div className="relative mt-2">
              <Mail  size={18}  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"  />
              <Input  type="email"  placeholder="Enter your email"
                className="pl-10 h-11 bg-white/10 border-violet-400/40 text-white placeholder:text-gray-400"  value={email}
                onChange={(e) => setEmail(e.target.value)}  />
            </div>
          </div>
          <div>
            <Label className="text-white">  Password  </Label>
            <div className="relative mt-2">
              <Lock  size={18}  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"  />
              <Input  type={showPassword ? "text" : "password"}  placeholder="Enter password"  className="pl-10 pr-10 h-11 bg-white/10 border-violet-400/40 text-white placeholder:text-gray-400"  value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <button  type="button"  onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>
          <div>
            <Label className="text-white">  Confirm Password </Label>
            <div className="relative mt-2">
              <Lock  size={18}  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input  type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm password"
                className="pl-10 pr-10 h-11 bg-white/10 border-violet-400/40 text-white placeholder:text-gray-400"
                value={confirmPassword}
                onChange={(e) =>  setConfirmPassword(e.target.value)  }  />
              <button  type="button"  onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"  >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox  id="terms"  checked={agree}
              onCheckedChange={(checked) =>
                setAgree(Boolean(checked))
              }  />
            <Label  htmlFor="terms" className="text-gray-300"  >  I agree to the Terms & Conditions  </Label>
          </div>
          <Button  type="submit"  className="w-full h-11 rounded-xl bg-violet-600 "  >  Create Account  </Button>
          <p className="text-center text-sm text-gray-300">  Already have an account?  <Link  to="/" className="ml-2 font-semibold text-violet-300 hover:text-white">Login</Link>  </p>
        </form>
      </Card>
    </div>
  );
}