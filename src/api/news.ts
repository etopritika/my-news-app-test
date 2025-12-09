import axios from "axios";
import type { NewsResponse, FetchNewsParams } from "../types/news";

const apiClient = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "X-Api-Key": import.meta.env.VITE_API_KEY,
  },
});

export const fetchNews = async (
  params: FetchNewsParams = {}
): Promise<NewsResponse> => {
  const { category, q } = params;

  const response = await apiClient.get<NewsResponse>("/top-headlines", {
    params: {
      language: "en",
      ...(category && { category }),
      ...(q && { q }),
    },
  });

  return response.data;
};

export const fetchNewsById = async (id: string) => {
  void id;
  return null;
};
