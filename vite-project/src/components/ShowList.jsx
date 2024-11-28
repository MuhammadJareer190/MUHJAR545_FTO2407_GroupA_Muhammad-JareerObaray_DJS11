import React, {useState, useEffect} from "react";
import { fetchPreview } from "../services/api";

const ShowList = () => {
    const [show, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getShow = async () => {
            setLoading(true);
            const data = await fetchPreview();
            setShows(data.sort((a, b) => a.title.localCompare(b.title)));
            setLoading(false);        
        };
        getShow()
    }, []);

    if(loading) return <div>Loading...</div>;
};

export default ShowList