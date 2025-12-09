import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import NewsList from "../components/NewsList";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <CategoryTabs />
      <NewsList />
    </div>
  );
};

export default Home;
