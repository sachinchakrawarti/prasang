import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../public_app/layout/PublicLayout";

/* Home */
import Home from "../public_app/features/home/Homepage";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {/* Home */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
