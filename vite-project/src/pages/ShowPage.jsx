import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { fetchShow } from "../services/api";

export const ShowPage = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getShow = async () => {
            const data = await fetchShow(id);
            setShow(data)
            setLoading(false);
        };
        getShow();
    },[id]);

    if (loading) return <div>Loading...</div>;

    return (
        <h1>{show.title}</h1>
    )
}

export default ShowPage;