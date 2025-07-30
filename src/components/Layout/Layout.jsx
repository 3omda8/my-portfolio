import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout() {
  return (
    <section className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <section className="main-bg">
        <Outlet />
      </section>
      <Footer />
    </section>
  );
}

export default Layout;
