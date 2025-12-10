export type SearchFiltersState = {
  searchInput: string;
  searchKeyword: string;
  selectedCategory: string;
};

export type SearchFiltersAPI = {
  setSearchInput: (s: string) => void;
  submitSearch: () => void;
  changeCategory: (c: string) => void;
};

export type NewsFiltersContextValue = SearchFiltersState & SearchFiltersAPI;

