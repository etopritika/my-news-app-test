import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto p-6">
        <h1 className="text-xl font-bold tracking-tight">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            World News
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default AppHeader;
