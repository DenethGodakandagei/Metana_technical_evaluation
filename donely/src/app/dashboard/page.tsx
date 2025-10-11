import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardPage from "../components/DashboardPage";

export default function Page() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <DashboardPage />
      </div>
    </div>
  );
}
