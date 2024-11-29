/**
 * The SortFilterControls component in JavaScript React allows users to sort a list of shows
 * alphabetically in ascending or descending order.
 * @returns The `SortFilterControls` component is being returned. It contains two buttons for sorting
 * shows alphabetically in ascending (A-Z) and descending (Z-A) order. When a button is clicked, it
 * triggers the `handleSort` function which sorts the `shows` array based on the title and updates the
 * state using the `setShows` function.
 */
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