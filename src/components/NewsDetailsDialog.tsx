import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import type { Article } from "../types/news";
import { formatDate } from "../lib/formatDate";
import { Button } from "./ui/button";
import { ExternalLink, ImageOff } from "lucide-react";
import { useNewsDetails } from "../context/news-details";

const formatMeta = (article: Article): string => {
  const parts: string[] = [];
  if (article.source.name) {
    parts.push(article.source.name);
  }
  if (article.publishedAt) {
    parts.push(formatDate(article.publishedAt).formatted);
  }
  if (article.author) {
    parts.push(article.author);
  }
  return parts.join(" • ");
};

const formatContent = (content: string): string => {
  return content.replace(/\s*\[\+\d+\s*chars\]\s*$/i, "").trim();
};

const NewsDetailsDialog = () => {
  const { article, open, closeDialog } = useNewsDetails();

  if (!article) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && closeDialog()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-start">
          <DialogTitle>{article.title}</DialogTitle>
          <DialogDescription>{formatMeta(article)}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {article.urlToImage ? (
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="rounded-lg w-full object-cover max-h-[400px]"
              />
            </div>
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-muted rounded-lg">
              <ImageOff className="w-12 h-12 text-muted-foreground" />
            </div>
          )}
          {article.description && (
            <p className="text-lg leading-relaxed">{article.description}</p>
          )}
          {article.content && (
            <p className="text-muted-foreground whitespace-pre-wrap">
              {formatContent(article.content)}
            </p>
          )}
          {article.url && (
            <div className="pt-4">
              <Button
                onClick={() => window.open(article.url, "_blank")}
                className="w-full cursor-pointer flex items-center justify-center gap-2"
              >
                Read full article{" "}
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsDetailsDialog;
