import { SearchIcon } from "lucide-react";
import { FC } from "react";

type Props = {
  suggestions: string[];
};

const SearchSuggestion: FC<Props> = ({ suggestions }) => {
  return (
    <div className="absolute w-full bg-[#212121] rounded-md mt-2 z-10">
      <ul className="my-2">
        {suggestions.map((suggestion: string) => (
          <li className="flex items-center hover-bg cursor-pointer px-4 py-4 gap-2">
            <SearchIcon className="h-6 w-1/8 m-2" />
            <span className="truncate text-2xl w-full">
              {suggestion.trim()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggestion;
