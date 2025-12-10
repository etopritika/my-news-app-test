import { useContext } from "react";
import { NewsFiltersContext } from "./Context";
import type { NewsFiltersContextValue } from "./types";

export function useNewsFilters(): NewsFiltersContextValue {
  const context = useContext(NewsFiltersContext);
  if (context === null) {
    throw new Error("useNewsFilters must be used within a NewsFiltersProvider");
  }
  return context;
}
