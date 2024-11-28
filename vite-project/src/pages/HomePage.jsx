import React, {useState, useEffect} from "react";
import { fetchPreviews } from "../services/api";
import { genreMap } from "../utils/genreMapper";

export const HomePage = () => {
    const [previews, setPreviews] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadPreviews = async () => {
        const data = await fetchPreviews();
        setPreviews(data);
        setLoading(false);
      };
      loadPreviews();
    }, []);
  
    if (loading) return <p className="text-center mt-20">Loading...</p>;
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Podcasts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previews.map((preview) => (
            <div
              key={preview.id}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <img
                src={preview.image}
                alt={preview.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold truncate">{preview.title}</h2>
                <p className="text-sm text-gray-600">
                  {preview.seasons} Seasons
                </p>
                <p className="text-sm text-gray-600">
                  Updated: {new Date(preview.updated).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  Genres: {preview.genres.map((id) => genreMap[id]).join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };