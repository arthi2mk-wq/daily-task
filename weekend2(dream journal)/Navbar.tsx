import { Link, useNavigate } from "@tanstack/react-router";
import { Home, PlusCircle, LogOut, Moon,} from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate({
      to: "/",
    });
  };
  return (
    <header className="w-full bg-slate-950 border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6">
        <Link  to="/dashboard"  className="flex items-center gap-2"  >
          <Moon  size={30}  className="text-violet-400"  />
          <span className="text-xl font-bold text-white">  Dream Journal  </span>
        </Link>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/dashboard">  <Button  variant="ghost" className="text-white hover:bg-violet-700"><Home size={18} />Dashboard </Button></Link>
          <Link to="/add-dream"><Button variant="ghost" className="text-white hover:bg-violet-700" ><PlusCircle size={18} />Add Dream</Button></Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <p className="text-xs text-gray-400">Welcome</p>
            <p className="text-sm font-semibold text-violet-300">{user.name || "User"} </p>
          </div>
          <Button variant="destructive" onClick={handleLogout}><LogOut size={18} />Logout</Button>
        </div>
      </div>
    </header>
  );
}