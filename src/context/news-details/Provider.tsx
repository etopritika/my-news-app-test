import { useState, useCallback, useMemo } from "react";
import type { PropsWithChildren } from "react";
import { NewsDetailsContext } from "./Context";
import type { NewsDetailsContextValue } from "./types";
import type { Article } from "../../types/news";

export function NewsDetailsProvider({ children }: PropsWithChildren) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = useCallback((article: Article) => {
    setSelectedArticle(article);
    setIsDialogOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
    setSelectedArticle(null);
  }, []);

  const value = useMemo<NewsDetailsContextValue>(
    () => ({
      article: selectedArticle,
      open: isDialogOpen,
      openDialog,
      closeDialog,
    }),
    [selectedArticle, isDialogOpen, openDialog, closeDialog]
  );

  return (
    <NewsDetailsContext.Provider value={value}>
      {children}
    </NewsDetailsContext.Provider>
  );
}
