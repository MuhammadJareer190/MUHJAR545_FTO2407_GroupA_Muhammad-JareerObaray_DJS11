import React from "react";

const SortFilterControls = ({ shows, setShows }) => {
    const handleSort = (type) => {
      const sorted = [...shows].sort((a, b) =>
        type === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      );
      setShows(sorted);
    };
  
    return (
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => handleSort("asc")} className="px-4 py-2 bg-gray-200 rounded">
          Sort A-Z
        </button>
        <button onClick={() => handleSort("desc")} className="px-4 py-2 bg-gray-200 rounded">
          Sort Z-A
        </button>
      </div>
    );
  };
  
  export default SortFilterControls;