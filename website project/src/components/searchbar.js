import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchComponent() {
  const termsList = ["Video Editing", "Video editor", "player", "apple", "banana", "car", "dog", "elephant"];

  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();
    // Check if the search term is in the termsList
    if (termsList.includes(trimmedSearchTerm)) {
      // Navigate to the results page with the search term as a query parameter
      navigate(`/results?query=${trimmedSearchTerm}`);
    } else {
      // Navigate to the no results page
      navigate("/no-results");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.trim() !== "");
  };

  const handleSuggestionClick = (term) => {
    setSearchTerm(term);
    setShowSuggestions(false);
  };
  return (
    <div className="relative flex justify-center items-center h-screen">
      <form className="max-w-sm" onSubmit={handleSearch}>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
          {showSuggestions && (
            <ul className="absolute w-full border rounded-md py-2 px-4 bg-white mt-2">
              {termsList
                .filter((term) => term.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((result, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(result)}>
                    {result}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
}

