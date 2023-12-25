import { useState } from "react";

import SearchSuggestion from "@/components/search-bar/SearchSuggestion";
import { YT_API_URI } from "@/utils/constants";

import { Search } from "lucide-react";
import { useQuery } from "react-query";

import { Item } from "@/interfaces/Item";
import { YoutubeSearchListResponse } from "@/interfaces/YoutubeSearchListResponse";

import { useDebounce } from "@/custom-hooks/useDebounce";

const fetchSearchSuggestions = async (searchQuery: string) => {
  const endpoint = `${YT_API_URI}/search?part=snippet&maxResults=5&q=${searchQuery}&key=${
    import.meta.env.VITE_YT_API_KEY
  }`;
  const response = await fetch(endpoint);
  return await response.json();
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, error } = useQuery<YoutubeSearchListResponse>(
    ["searchSuggestions", searchQuery],
    () => fetchSearchSuggestions(searchQuery),
    {
      enabled: !!searchQuery,
    }
  );

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setSearchQuery(value);
  };

  const debouncedSearch = useDebounce(handleSearchInput, 500);

  const suggestions: string[] =
    data?.items?.map((item: Item) => item?.snippet?.title ?? "") || [];

  return (
    <div className="relative">
      <div className="flex items-center w-[40rem]">
        <input
          type="search"
          className=" h-10 w-full rounded-l-full pl-6 border border-[#303030] bg-[#121212] focus:border-blue-400 focus:outline-0"
          placeholder="Search"
          onChange={debouncedSearch}
        />
        <button className="bg-[#222222] border border-[#303030] h-10 w-16 flex justify-center items-center rounded-r-full">
          <Search size={20} />
        </button>
      </div>
      {!error && suggestions.length > 0 && (
        <SearchSuggestion suggestions={suggestions} />
      )}
    </div>
  );
};

export default SearchBar;
