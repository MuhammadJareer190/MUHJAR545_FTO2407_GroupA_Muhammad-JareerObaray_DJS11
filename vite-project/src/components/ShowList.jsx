import React, {useState, useEffect} from "react";
import ShowCard from "./ShowCard";
import { fetchShows } from "../services/api";

const ShowsList = ({ onShowSelect }) => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const loadShows = async () => {
        try {
          const data = await fetchShows();
          setShows(data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      loadShows();
    }, []);
  
    if (loading) return <p>Loading shows...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <h2>All Shows</h2>
        <ul>
          {shows.map((show) => (
            <li key={show.id}>
              <div onClick={() => onShowSelect(show.id)} style={{ cursor: "pointer" }}>
                <img src={show.image} alt={show.name} />
                <h3>{show.name}</h3>
                <p>{show.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ShowsList;