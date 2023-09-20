import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
const Root = () => {
  return (
    <div className="site-wrapper">
      <Outlet />
      <Footer />
    </div>
  );
};
export default Root;
