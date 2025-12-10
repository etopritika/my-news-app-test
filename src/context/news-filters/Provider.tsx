import { useState, useCallback, useMemo } from "react";
import type { PropsWithChildren } from "react";
import { NewsFiltersContext } from "./Context";
import { CATEGORIES } from "../../constants/categories";
import type { NewsFiltersContextValue } from "./types";

export function NewsFiltersProvider({ children }: PropsWithChildren) {
  const [searchInput, setSearchInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    CATEGORIES[0]
  );

  const submitSearch = useCallback(() => {
    setSearchKeyword(searchInput);
  }, [searchInput]);

  const changeCategory = useCallback((category: string) => {
    setSelectedCategory(category);
    setSearchInput("");
    setSearchKeyword("");
  }, []);

  const value = useMemo<NewsFiltersContextValue>(
    () => ({
      searchInput,
      setSearchInput,
      searchKeyword,
      submitSearch,
      selectedCategory,
      changeCategory,
    }),
    [searchInput, searchKeyword, selectedCategory, submitSearch, changeCategory]
  );

  return (
    <NewsFiltersContext.Provider value={value}>
      {children}
    </NewsFiltersContext.Provider>
  );
}
