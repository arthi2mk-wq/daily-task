import * as React from "react";

export function Button({ className = "", variant = "default", size = "default", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"outline"|"destructive"|"ghost"; size?: "default"|"sm"|"icon" }) {
  const base = "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition disabled:opacity-50";
  const variants = {
    default: "bg-black text-white hover:opacity-90",
    outline: "bg-white hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    ghost: "border-transparent hover:bg-gray-100"
  };
  const sizes = { default: "", sm: "px-3 py-1.5", icon: "h-9 w-9 p-0" };
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
