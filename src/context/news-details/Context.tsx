import { createContext } from "react";
import type { NewsDetailsContextValue } from "./types";

export const NewsDetailsContext = createContext<NewsDetailsContextValue | null>(
  null
);
