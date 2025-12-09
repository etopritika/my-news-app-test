import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type CategoryTabsProps = {
  categories: string[];
  value: string;
  onChange: (category: string) => void;
};

const CategoryTabs = ({ categories, value, onChange }: CategoryTabsProps) => {
  return (
    <Tabs value={value} onValueChange={onChange}>
      <TabsList className="flex flex-wrap h-auto gap-2 p-2">
        {categories.map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="cursor-pointer"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default CategoryTabs;
