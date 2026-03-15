// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./utils/ScrollToTop";
import GoUpGoDown from "./utils/GoUpGoDown";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            {" "}
            {/* Add AuthProvider here */}
            <ScrollToTop />
            <GoUpGoDown />
            <AppRoutes />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
