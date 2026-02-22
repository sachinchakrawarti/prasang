import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../dashboard_app/layout/DashboardLayout";

const DashboardHome = () => {
  return <h1>Dashboard Home</h1>;
};

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
