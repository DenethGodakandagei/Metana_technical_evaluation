import TemplateCard from "./TemplateCard";
import { ArrowRight, Clock } from "lucide-react";
import { Star } from "lucide-react";
import Banner from "./Banner";
import RecentCard from "../components/RecentCarsd";


export default function DashboardPage() {
  const templates = [
    { title: "Web Pages", description: "Good products deserve good websites.", image: "/assets/templates/template1.png" },
    { title: "Presentations", description: "Easily edit our animated templates.", image: "/assets/templates/template2.png" },
    { title: "Social Media", description: "Everything you need for socials.", image: "/assets/templates/template3.png" },
    { title: "Sales Pitch", description: "Turn your dreams into reality.", image: "/assets/templates/template4.png" },
  ];

  

  return (
    <main className="flex-1 p-8 bg-white dark:bg-[#1D1D1D] overflow-y-auto">
      <Banner />

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md flex  font-medium text-gray-600"><Star className="w-4 h-4 text-gray-600 m-1" /><span className="">For you</span></h3>
          <span className="text-sm text-gray-500 flex justify-between">View all templates    <ArrowRight className="w-4 h-4" /></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {templates.map((t) => (
            <TemplateCard key={t.title} {...t} />
          ))}
        </div>
      </section>
      <RecentCard />
    </main>
  );
}
