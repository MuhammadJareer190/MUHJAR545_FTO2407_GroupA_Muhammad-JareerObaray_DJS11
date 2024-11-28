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