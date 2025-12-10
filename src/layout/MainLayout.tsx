import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex flex-col flex-1 container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
