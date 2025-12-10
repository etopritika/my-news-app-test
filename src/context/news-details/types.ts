import type { Article } from "../../types/news";

export type NewsDetailsState = {
  article: Article | null;
  open: boolean;
};

export type NewsDetailsAPI = {
  openDialog: (article: Article) => void;
  closeDialog: () => void;
};

export type NewsDetailsContextValue = NewsDetailsState & NewsDetailsAPI;
