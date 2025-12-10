import { useContext } from "react";
import { NewsDetailsContext } from "./Context";
import type { NewsDetailsContextValue } from "./types";

export function useNewsDetails(): NewsDetailsContextValue {
  const context = useContext(NewsDetailsContext);
  if (context === null) {
    throw new Error("useNewsDetails must be used within a NewsDetailsProvider");
  }
  return context;
}
