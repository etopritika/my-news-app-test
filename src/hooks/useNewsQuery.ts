import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../api/news";
import type { FetchNewsParams, NewsResponse } from "../types/news";

export const useNewsQuery = (params: FetchNewsParams = {}) => {
  return useQuery<NewsResponse>({
    queryKey: ["news", params],
    queryFn: () => fetchNews(params),
  });
};
