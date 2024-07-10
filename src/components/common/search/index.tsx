import { debounce } from "lodash";
import { useEffect, useState } from "react";
// SearchInput
const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [_, setDebouncedQuery] = useState(query);

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setQuery("");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    const handler = debounce(
      (nextValue: string) => setDebouncedQuery(nextValue),
      500
    );
    handler(query);
    return () => {
      handler.cancel();
    };
  }, [query]);
  return (
    <form method="GET" className="w-full" onSubmit={handleSubmit}>
      <div className="bg-white border-2  shadow p-2 relative rounded-xl flex">
        <span className="w-auto flex justify-end  items-center text-gray-500 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input
          name="search"
          id="search"
          className="border-white outline-none border-0 w-full rounded-xl p-2"
          type="text"
          value={query}
          placeholder="Try 'How to find product market fit?'"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-black hover:bg-gray-700 rounded-xl text-white text-xl p-2 pl-4 pr-4 ml-2">
          <p className="font-semibold text-xs">Search</p>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
