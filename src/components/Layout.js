import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
