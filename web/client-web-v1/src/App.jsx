import React from "react";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
};

export default App;
