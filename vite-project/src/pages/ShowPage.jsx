import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { fetchShow } from "../services/api";

export const ShowPage = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadShow = async () => {
        const data = await fetchShow(id);
        setShow(data);
        setLoading(false);
      };
  
      loadShow();
    }, [id]);
  
    if (loading) return <p className="text-center mt-20">Loading...</p>;
  
    return (
      <div>
        <h1 className="text-2xl font-bold">{show.title}</h1>
        <img
          src={show.image}
          alt={show.title}
          className="w-full h-60 object-cover rounded-md my-4"
        />
        <p className="text-sm text-gray-600 mb-4">{show.description}</p>
        <h2 className="text-xl font-semibold mb-3">Seasons</h2>
        {show.seasons.map((season, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden mb-4"
          >
            <img
              src={season.image}
              alt={`Season ${index + 1}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                Season {index + 1}: {season.episodes.length} Episodes
              </h3>
            </div>
          </div>
        ))}
      </div>
    );
  };
  