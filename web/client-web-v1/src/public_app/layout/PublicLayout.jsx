import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { ThemeProvider } from "../../utils/GlobalImports";

const PublicLayout = () => {
  return (
    <ThemeProvider appType="public">
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default PublicLayout;
