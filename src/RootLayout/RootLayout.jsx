import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
