import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <section className="flex-grow main-bg">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default Layout;
