import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {ArrowLeft,Moon,NotebookText,Tag,Save,} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
export default function AddDream() {
  const navigate = useNavigate();
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [tags,setTags]=useState("");
  const saveDream=(e:React.FormEvent)=>{
    e.preventDefault();
    if(title.trim()===""){
      alert("Please enter Dream Title");
      return;
    }
    const dreams=JSON.parse(localStorage.getItem("dreams") || "[]");
    const newDream={
      id:Date.now(),
      title,
      description,
      tags:tags
        .split(",")
        .map(tag=>tag.trim())
        .filter(tag=>tag!==""),
      date:new Date().toLocaleDateString()
    };
    dreams.push(newDream);
    localStorage.setItem("dreams",JSON.stringify(dreams));
    alert("Dream Saved Successfully!");
    navigate({
      to:"/dashboard",
    });
  };
  return(
    <>
    <Navbar />
<div className="min-h-screen bg-indigo-900  flex justify-center items-center px-4 py-10">
     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-900 to-purple-950">
  </div>
<Card className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
<div className="flex items-center justify-between">
<Button variant="ghost"onClick={()=>navigate({to:"/dashboard"})}><ArrowLeft size={18}/>Back</Button>
<h1 className="text-3xl text-white font-bold">Add Dream</h1>
<div/>
</div>
<form onSubmit={saveDream}className="space-y-6 mt-8">
<div>
<Label className="text-white">Dream Title </Label>
<div className="relative mt-2">
<Moon size={18} className="absolute left-3 top-3 text-violet-300"
/>
<Input placeholder="Enter dream title" value={title} onChange={(e)=>setTitle(e.target.value)} className="pl-10 bg-white/10 border-white/20 text-white"
/>
</div>
</div>
<div>
<Label className="text-white">Description </Label>
<div className="relative mt-2">
<NotebookText size={18} className="absolute left-3 top-3 text-violet-300"
/>
<Textarea rows={6} placeholder="Write your dream..." value={description}onChange={(e)=>setDescription(e.target.value)}className="pl-10 bg-white/10 border-white/20 text-white"/>
</div>
</div>
<div>
<Label className="text-white">Tags</Label>
<div className="relative mt-2">
<Tag size={18} className="absolute left-3 top-3 text-violet-300" />
<Input placeholder="Flying, Ocean, School" value={tags} onChange={(e)=>setTags(e.target.value)}
className="pl-10 bg-white/10 border-white/20 text-white"/>
</div>
<p className="text-gray-300 text-sm mt-2">Separate multiple tags using commas.</p>
</div>
<div className="flex justify-end gap-4">
<Button type="button" variant="secondary"onClick={()=>navigate({to:"/dashboard"})}>Cancel</Button>
<Button type="submit" className="bg-violet-600 hover:bg-violet-700"><Save size={18}/>Save Dream</Button>
</div>
</form>
</Card>
</div>
</>
);
}