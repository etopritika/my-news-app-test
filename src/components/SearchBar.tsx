import type { FormEvent } from "react";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

const SearchBar = ({ value, onChange, onSubmit }: SearchBarProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search news..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pr-10"
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-transparent"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </div>
      <Button type="submit" className="cursor-pointer" aria-label="Search">
        <Search className="h-4 w-4" aria-hidden="true" />
      </Button>
    </form>
  );
};

export default SearchBar;
