import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Moon, Tag, Trash2, } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
export default function DreamDetails() {
  const navigate = useNavigate();
  const { dreamId } = useParams({
    from: "/dream/$dreamId",
  });
  const dreams = JSON.parse(
    localStorage.getItem("dreams") || "[]"
  );
  const dream = dreams.find(
    (item: any) => item.id.toString() === dreamId
  );
  if (!dream) {
    return (
      <div className="min-h-screen bg-indigo-900  flex justify-center items-center">
         <div >
    <Navbar />
  </div>
        <Card className="p-8 bg-white/10 border-white/20">
          <h2 className="text-white text-2xl">Dream Not Found</h2>
           <Button className="mt-5" onClick={() =>
              navigate({ to: "/dashboard" })  }>Back</Button>
        </Card>
    </div>
    );
  }
  function deleteDream() {
    const updatedDreams = dreams.filter(
      (item: any) => item.id !== dream.id
    );
    localStorage.setItem("dreams", JSON.stringify(updatedDreams)
    );
    alert("Dream Deleted");
    navigate({
      to: "/dashboard",
    });
  }
  return (
<div className="min-h-screen bg-indigo-900 py-10 px-4">
<div className="max-w-4xl mx-auto">
<Button variant="ghost" className="mb-6 text-white" onClick={() =>navigate({to:"/dashboard"})}><ArrowLeft className="mr-2"/>Back</Button>
<Card className="bg-white/10 border-white/20 backdrop-blur-xl p-8 rounded-3xl">
<h1 className="text-4xl font-bold text-white flex items-center gap-3"><Moon className="text-violet-400"/>{dream.title}</h1>
<div className="flex items-center gap-2 mt-5 text-gray-300">
<Calendar size={18}/>
{dream.date}
</div>
<div className="mt-8">
<h2 className="text-2xl text-white font-semibold">Description </h2>
<p className="text-gray-300 leading-8 mt-4">{dream.description || "No description available."}</p>
</div>
<div className="mt-8">
<h2 className="text-2xl text-white flex items-center gap-2">
<Tag size={22}/> Tags </h2>
<div className="flex flex-wrap gap-3 mt-5">
{dream.tags.length===0?
<p className="text-gray-400">No Tags </p>
:
dream.tags.map((tag:string,index:number)=>(
<span key={index}className="px-4 py-2 rounded-full bg-violet-700 text-white">#{tag} </span>
))
}
</div>
</div>
<div className="mt-10 flex justify-end">
<Button variant="destructive" onClick={deleteDream} > <Trash2 className="mr-2"/> Delete Dream </Button>
</div>
</Card>
</div>
</div>
 );
}