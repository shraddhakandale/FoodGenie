import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="min-h-screen bg-orange-50">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
