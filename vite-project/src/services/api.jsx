const BASE_URL = "https://podcast-api.netlify.app";

export const fetchPreviews = async () => {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) throw new Error('Failed to fetch previews');
    return response.json();
  };
  
  export const fetchShow = async (id) => {
    try {
      const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching show details:", error);
      return { error: "Unable to fetch show details. Please try again later." };
    }
  };