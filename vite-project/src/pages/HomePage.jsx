/**
 * The HomePage component fetches podcast previews and displays them using the ShowList component in a
 * React application.
 * @returns The `HomePage` component is being returned. It fetches previews data using the
 * `fetchPreviews` function, displays a loading message while fetching data, and then renders a list of
 * shows using the `ShowList` component once the data is loaded.
 */
import React, {useState, useEffect} from "react";
import { fetchPreviews } from "../services/api";
import ShowList from "../components/ShowList";


export const HomePage = () => {
    const [previews, setPreviews] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadPreviews = async () => {
        try {
          const data = await fetchPreviews();
          setPreviews(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching previews:', error);
        }
      };
      loadPreviews();
    }, []);
  
    if (loading) return <p className="text-center mt-20">Loading...</p>;
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Podcasts</h1>
        <ShowList previews={previews} />
      </div>
    );
};

export default HomePage