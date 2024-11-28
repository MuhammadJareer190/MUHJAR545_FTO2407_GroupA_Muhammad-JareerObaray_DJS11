const BASE_URL = "https://podcast-api.netlify.app";

export const fetchPreviews = async () => {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) throw new Error('Failed to fetch previews');
    return response.json();
  };
  
  export const fetchShow = async (id) => {
    const response = await fetch(`${BASE_URL}/id/${id}`);
    if (!response.ok) throw new Error('Failed to fetch show details');
    return response.json();
  };