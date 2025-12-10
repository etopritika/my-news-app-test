import type { Article } from "../types/news";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/formatDate";
import { useNewsDetails } from "../context/news-details";
import { ImageOff } from "lucide-react";

type NewsCardProps = {
  article: Article;
};

const NewsCard = ({ article }: NewsCardProps) => {
  const { openDialog } = useNewsDetails();

  const handleClick = () => {
    openDialog(article);
  };

  return (
    <article className="flex h-full">
      <Card className="flex flex-col flex-1 hover:shadow-md transition-shadow pt-0">
        {article.urlToImage ? (
          <div className="w-full h-48 overflow-hidden rounded-t-xl">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-48 flex items-center justify-center bg-muted rounded-t-xl">
            <ImageOff className="w-10 h-10 text-muted-foreground" />
          </div>
        )}
        <CardHeader>
          <h2 className="leading-none font-semibold line-clamp-2">
            {article.title}
          </h2>
          {article.description && (
            <p className="text-muted-foreground text-sm line-clamp-3 mt-2">
              {article.description}
            </p>
          )}
        </CardHeader>
        <div className="flex flex-col mt-auto gap-2">
          <CardContent>
            <time
              dateTime={formatDate(article.publishedAt).iso}
              className="text-xs text-muted-foreground"
            >
              {formatDate(article.publishedAt).formatted}
            </time>
          </CardContent>
          <CardFooter>
            <Button onClick={handleClick} className="w-full cursor-pointer">
              Read more
            </Button>
          </CardFooter>
        </div>
      </Card>
    </article>
  );
};

export default NewsCard;
