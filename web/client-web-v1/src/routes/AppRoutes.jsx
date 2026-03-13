import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<PublicRoutes />} />
    </Routes>
  );
}
