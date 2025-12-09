import { Loader } from "lucide-react";
import type { Article } from "../types/news";
import NewsCard from "./NewsCard";

type NewsListProps = {
  data: Article[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

const NewsList = ({ data, isLoading, isError }: NewsListProps) => {
  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center py-12 flex-1"
        role="status"
        aria-busy="true"
      >
        <Loader className="h-6 w-6 animate-spin" aria-hidden="true" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className="flex items-center justify-center py-12 flex-1"
        role="alert"
      >
        <p className="text-center text-muted-foreground">
          Failed to load news.
        </p>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div
        className="flex items-center justify-center py-12 flex-1"
        role="alert"
      >
        <p className="text-center text-muted-foreground">No news found.</p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 list-none flex-1">
      {data.map((article, index) => (
        <li key={`${article.url}-${index}`} className="h-full">
          <NewsCard article={article} />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
