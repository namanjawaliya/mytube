import { SearchIcon } from "lucide-react";

type Props = {
  suggestions: string[];
};

const SearchSuggestion = ({ suggestions }: Props) => {
  return (
    <div className="absolute w-full bg-[#212121] rounded-md mt-1">
      <ul className="my-2">
        {suggestions.map((suggestion: string) => (
          <li className="flex items-center hover-bg gap-6 cursor-pointer">
            <SearchIcon className="h-4 w-10 m-2" />
            <span className="truncate">{suggestion.trim()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggestion;
