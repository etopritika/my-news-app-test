import { useState, useCallback } from "react";
import { useNewsQuery } from "../hooks/useNewsQuery";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import NewsList from "../components/NewsList";
import { Separator } from "../components/ui/separator";

const categories = [
  "general",
  "business",
  "technology",
  "sports",
  "health",
  "entertainment",
  "science",
];

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const { data, isLoading, isError } = useNewsQuery({
    category: selectedCategory,
    ...(searchKeyword && { q: searchKeyword }),
  });

  const handleSearchSubmit = useCallback(() => {
    setSearchKeyword(searchInput);
  }, [searchInput]);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setSearchInput("");
    setSearchKeyword("");
  }, []);

  return (
    <section className="flex flex-col gap-6 p-6 flex-1">
      <header className="flex flex-col gap-4">
        <SearchBar
          value={searchInput}
          onChange={setSearchInput}
          onSubmit={handleSearchSubmit}
        />
        <CategoryTabs
          categories={categories}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
      </header>
      <Separator />
      <NewsList data={data?.articles} isLoading={isLoading} isError={isError} />
    </section>
  );
};

export default Home;
