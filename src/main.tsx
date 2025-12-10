import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
import { NewsFiltersProvider } from "./context/news-filters";
import { NewsDetailsProvider } from "./context/news-details";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NewsFiltersProvider>
        <NewsDetailsProvider>
          <App />
        </NewsDetailsProvider>
      </NewsFiltersProvider>
    </QueryClientProvider>
  </StrictMode>
);
