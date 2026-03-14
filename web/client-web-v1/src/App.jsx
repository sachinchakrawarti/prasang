import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme";
import { LanguageProvider } from "./context/LanguageContext";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./utils/ScrollToTop";
import GoUpGoDown from "./utils/GoUpGoDown";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <ScrollToTop />
          <GoUpGoDown />
          <AppRoutes />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
