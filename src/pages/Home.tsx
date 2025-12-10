import { useNewsQuery } from "../hooks/useNewsQuery";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import NewsList from "../components/NewsList";
import { Separator } from "../components/ui/separator";
import NewsDetailsDialog from "../components/NewsDetailsDialog";
import { CATEGORIES } from "../constants/categories";
import { useNewsFilters } from "../context/news-filters";

const Home = () => {
  const {
    searchInput,
    setSearchInput,
    searchKeyword,
    submitSearch,
    selectedCategory,
    changeCategory,
  } = useNewsFilters();

  const { data, isLoading, isError } = useNewsQuery({
    category: selectedCategory,
    ...(searchKeyword && { q: searchKeyword }),
  });

  return (
    <section className="flex flex-col gap-6 p-6 flex-1">
      <header className="flex flex-col gap-4">
        <SearchBar
          value={searchInput}
          onChange={setSearchInput}
          onSubmit={submitSearch}
        />
        <CategoryTabs
          categories={CATEGORIES}
          value={selectedCategory}
          onChange={changeCategory}
        />
      </header>
      <Separator />
      <NewsList data={data?.articles} isLoading={isLoading} isError={isError} />
      <NewsDetailsDialog />
    </section>
  );
};

export default Home;
