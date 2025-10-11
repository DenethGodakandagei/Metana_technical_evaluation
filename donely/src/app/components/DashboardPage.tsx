import HeroSection from "./HeroSection";
import TemplateCard from "./TemplateCard";
import RecentItem from "./RecentItem";

export default function DashboardPage() {
  const templates = [
    { title: "Web Pages", description: "Good products deserve good websites.", image: "/template1.jpg" },
    { title: "Presentations", description: "Easily edit our animated templates.", image: "/template2.jpg" },
    { title: "Social Media", description: "Everything you need for socials.", image: "/template3.jpg" },
    { title: "Sales Pitch", description: "Turn your dreams into reality.", image: "/template4.jpg" },
  ];

  const recents = [
    { title: "Document", author: "Mark", date: "May 14, 2025", image: "/recent1.jpg" },
    { title: "Web Pages", author: "Mark", date: "May 14, 2025", image: "/recent2.jpg" },
    { title: "60 Second Cut", author: "Caroline", date: "May 14, 2025", image: "/recent3.jpg" },
  ];

  return (
    <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
      <HeroSection />

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">For you</h3>
          <button className="text-sm text-indigo-600 hover:underline">View all templates →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {templates.map((t) => (
            <TemplateCard key={t.title} {...t} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Recents</h3>
          <button className="text-sm text-indigo-600 hover:underline">See in projects →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recents.map((r) => (
            <RecentItem key={r.title} {...r} />
          ))}
        </div>
      </section>
    </main>
  );
}
