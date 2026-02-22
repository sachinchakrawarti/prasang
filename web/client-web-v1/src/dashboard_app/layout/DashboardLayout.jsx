import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import SideNavigation from "./sidenavigation/SideNavigation";
import { ThemeProvider } from "../../utils/GlobalImports";

const DashboardLayout = () => {
  return (
    <ThemeProvider appType="dashboard">
      <SideNavigation />
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
};

export default DashboardLayout;
