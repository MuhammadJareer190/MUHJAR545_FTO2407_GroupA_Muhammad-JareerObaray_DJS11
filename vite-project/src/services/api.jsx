const BASE_URL = "https://podcast-api.netlify.app";

export const fetchPreview = async () => {
    const response = await fetch(`${BASE_URL}`);
    return response.json();
};

export const fetchShow = async (id) => {
    const response = await fetch(`${BASE_URL}/id${id}`);
    return response.json();
};