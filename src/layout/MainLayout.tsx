import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto">
      <Header />
      <main className="flex flex-col flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
