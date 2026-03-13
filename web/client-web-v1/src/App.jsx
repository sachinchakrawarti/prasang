// src/App.jsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./utils/ScrollToTop";
import GoUpGoDown from "./utils/GoUpGoDown";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <GoUpGoDown />
      <AppRoutes />
    </>
  );
};

export default App;
