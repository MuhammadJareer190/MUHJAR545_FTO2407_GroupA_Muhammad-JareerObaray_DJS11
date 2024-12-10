/* This code snippet is a React component named `ShowList`. It imports React and another component
called `ShowCard`. The `ShowList` component takes a prop called `previews`, which is an array of
data. It then maps over this array and renders a `ShowCard` component for each item in the
`previews` array. Each `ShowCard` component is passed a `key` prop and a `preview` prop based on the
data in the array. Finally, the component returns a grid layout with the rendered `ShowCard`
components. */
import React, {useState, useEffect} from "react";
import ShowCard from "./ShowCard";

const ShowList = ({ previews }) => {
  // Initialize sortedPreviews with previews sorted alphabetically by title
  const [sortedPreviews, setSortedPreviews] = useState(
    [...previews].sort((a, b) => a.title.localeCompare(b.title))
  );

  // Sorting function for ascending and descending
  const handleSort = (type) => {
    const sorted = [...sortedPreviews].sort((a, b) =>
      type === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    setSortedPreviews(sorted);
  };

  // Update sortedPreviews when previews prop changes
  useEffect(() => {
    setSortedPreviews([...previews].sort((a, b) => a.title.localeCompare(b.title)));
  }, [previews]);

  return (
    <div>
      {/* Sort buttons */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => handleSort("asc")}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Sort A-Z
        </button>
        <button
          onClick={() => handleSort("desc")}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Sort Z-A
        </button>
      </div>

      {/* Show the sorted list of previews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPreviews.map((preview) => (
          <ShowCard key={preview.id} preview={preview} />
        ))}
      </div>
    </div>
  );
};

export default ShowList;