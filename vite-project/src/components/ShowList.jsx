/* This code snippet is a React component named `ShowList`. It imports React and another component
called `ShowCard`. The `ShowList` component takes a prop called `previews`, which is an array of
data. It then maps over this array and renders a `ShowCard` component for each item in the
`previews` array. Each `ShowCard` component is passed a `key` prop and a `preview` prop based on the
data in the array. Finally, the component returns a grid layout with the rendered `ShowCard`
components. */
import React from "react";
import ShowCard from "./ShowCard";

const ShowList = ({ previews }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {previews.map((preview) => (
          <ShowCard key={preview.id} preview={preview} />
        ))}
      </div>
    );
  };
  
  export default ShowList;