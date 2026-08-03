import { useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import { Search, Plus, Moon, Tag,} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
export default function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const dreams = JSON.parse(localStorage.getItem("dreams") || "[]");
  const tags = useMemo(() => {
    const map: Record<string, number> = {};
    dreams.forEach((dream: any) => {
      dream.tags?.forEach((tag: string) => {
        map[tag] = (map[tag] || 0) + 1;
      });
    });
    return map;
  }, [dreams]);
  const filteredDreams = dreams.filter((dream: any) => {
    const matchesSearch =
      dream.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      dream.description
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesTag =
      selectedTag === "" ||
      dream.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-indigo-900 ">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div>
              <h2 className="text-4xl font-bold text-white">
                Welcome, <span className="text-violet-400">  {" "}  {user.name}  </span>  </h2>
              <p className="text-slate-300 mt-2">   Record and understand your dreams. </p>
            </div>
            <Button  onClick={() =>  navigate({ to: "/add-dream",
                })
              }
              className="bg-violet-600 hover:bg-violet-700"
            >  <Plus size={18} />  Add Dream</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <Card className="bg-white/10 border-white/20 p-6">
              <Moon className="text-violet-400" />
             <h3 className="text-white mt-3">  Total Dreams  </h3>
              <p className="text-4xl font-bold text-violet-300"> {dreams.length}  </p> </Card>
            <Card className="bg-white/10 border-white/20 p-6">
              <Tag className="text-pink-400" />
              <h3 className="text-white mt-3">  Total Tags</h3>
              <p className="text-4xl font-bold text-pink-300"> {Object.keys(tags).length} </p>
            </Card>
            <Card className="bg-white/10 border-white/20 p-6">
             <Search className="text-blue-400" />
              <h3 className="text-white mt-3"> Search Dreams</h3>
              <Input placeholder="Search Dreams..."value={search}onChange={(e) => setSearch(e.target.value)} className="mt-3 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </Card>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20 p-5">
              <h2 className="text-xl text-white mb-4">Tag Cloud</h2>
              <div className="flex flex-wrap gap-3">
                <Button variant={selectedTag === "" ? "default" : "outline"}onClick={() => setSelectedTag("")}> All</Button>
                {Object.entries(tags).length === 0 ? (
                  <p className="text-slate-300">
                    No Tags Available
                  </p>
                ) : (
                  Object.entries(tags).map(([tag, count]) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`font-semibold ${
                        selectedTag === tag
                          ? "text-pink-400"
                          : "text-violet-300"
                      }`}
                      style={{
                        fontSize: `${16 + Number(count) * 4}px`,
                      }}
                    >
                      #{tag}
                    </button>
                  ))
                )}
              </div>
            </Card>
            <div className="lg:col-span-2">
  <h2 className="text-white text-2xl font-bold mb-4"> Dream Entries ({filteredDreams.length})</h2>
  {dreams.length === 0 ? (
    <Card className="bg-white/10 border-white/20 p-10 text-center">
      <Moon size={70}className="mx-auto text-violet-400"/>
      <h2 className="text-white text-2xl mt-5">No Dreams Yet</h2>
      <p className="text-slate-300 mt-2">Click "Add Dream" to record your first dream.</p>
      <Button className="mt-6 bg-violet-600 hover:bg-violet-700" onClick={() =>navigate({ to: "/add-dream", })}><Plus size={18} /> Add Dream</Button>
    </Card>
  ) : filteredDreams.length === 0 ? (
    <Card className="bg-white/10 border-white/20 p-10 text-center">
      <Search size={70} className="mx-auto text-violet-400"/>
      <h2 className="text-white text-2xl mt-5">No Dreams Found</h2>
      <p className="text-slate-300 mt-2">Try another search or select another tag.</p>
    </Card>
  ) : (
    <div className="space-y-5">
      {filteredDreams.map((dream: any, index: number) => (
        <Card key={dream.id ?? index}
          className="bg-white/10 border-white/20 p-6 ">
          <h2 className="text-2xl font-semibold text-white"> {dream.title}</h2>
          <p className="mt-3 text-slate-300"> {dream.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {dream.tags?.map((tag: string) => (
              <span key={tag}className="bg-violet-700 text-white text-sm px-3 py-1 rounded-full"> #{tag} </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-400">{dream.date ?? new Date().toLocaleDateString()} </p>
          <div className="mt-5">
            <Link to="/dream/$dreamId" params={{dreamId: String(dream.id ?? index),}}>
              <Button variant="outline" className="border-violet-400 text-violet-300 hover:bg-violet-700 hover:text-white">View Details</Button>
            </Link>
          </div>
        </Card>
          ))}
         </div>
          )}
         </div>
        </div>
      </div>
    </div>
    </>
  );
}
