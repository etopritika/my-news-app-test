import { createContext } from "react";
import type { NewsFiltersContextValue } from "./types";

export const NewsFiltersContext = createContext<NewsFiltersContextValue | null>(
  null
);
