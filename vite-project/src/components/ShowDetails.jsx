import React, { useState, useEffect } from "react";
import { fetchShowDetails } from "../utils/api";

const ShowDetails = ({ showId, onBack }) => {
  const [showDetails, setShowDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadShowDetails = async () => {
      try {
        const data = await fetchShowDetails(showId);
        setShowDetails(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    loadShowDetails();
  }, [showId]);

  if (loading) return <p>Loading show details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <button onClick={onBack}>Back to Shows</button>
      <h2>{showDetails.name}</h2>
      <p>{showDetails.description}</p>
      <h3>Seasons:</h3>
      <ul>
        {showDetails.seasons.map((season) => (
          <li key={season.id}>
            <h4>{season.name}</h4>
            <p>{season.episodeCount} Episodes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowDetails;
