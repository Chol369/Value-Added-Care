import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "next-themes";
import { initializeGoogleAnalytics } from "./lib/analytics";

// Initialize Google Analytics
initializeGoogleAnalytics();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <App />
  </ThemeProvider>
);
