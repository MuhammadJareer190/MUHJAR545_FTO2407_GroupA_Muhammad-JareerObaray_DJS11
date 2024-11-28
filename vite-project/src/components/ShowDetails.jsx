import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchShow } from "../services/api";

const ShowDetails = () => {
    const { id } = useParams();
    const [showDetails, setShowDetails] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadShowDetails = async () => {
        try {
          const data = await fetchShow(id);
          setShowDetails(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching show details:', error);
        }
      };
      loadShowDetails();
    }, [id]);
  
    if (loading) return <p className="text-center mt-20">Loading...</p>;
  
    if (!showDetails)
      return <p className="text-center mt-20">Show details not found</p>;
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">{showDetails.title}</h1>
        <img
          src={showDetails.image}
          alt={showDetails.title}
          className="w-full h-64 object-cover mb-4"
        />
        <p>{showDetails.description}</p>
        <button
          onClick={() => alert('Playing podcast...')}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Play
        </button>
      </div>
    );
  };
  
  export default ShowDetails;