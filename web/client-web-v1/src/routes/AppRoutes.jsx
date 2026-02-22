import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import DashboardRoutes from "./DashboardRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Dashboard first */}
      <Route path="/dashboard/*" element={<DashboardRoutes />} />

      {/* Public routes */}
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
}
