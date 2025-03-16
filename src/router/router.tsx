import { Routes, Route, Outlet } from "react-router-dom";
import { memo } from "react";
import Error from "../views/Error";
import Index from "../views/Index";
import Products from "../views/Products";
import Cart from "../views/Cart";
import Fashion from "../views/Fashion";
import Accessory from "../views/Accessory";
import Digital from "../views/Digital";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

function Layout() {
  return (
    <div>
      <Header />
      <section className="main">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Index />} />
        <Route path="/product:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/digital" element={<Digital />} />
      </Route>
    </Routes>
  );
};

export default memo(Router);
