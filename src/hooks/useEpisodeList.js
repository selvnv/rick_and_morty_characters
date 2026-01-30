import { useState, useEffect } from "react";
import { fetchEpisodes } from "../utils/api";

export const useEpisodeList = (defaultValue) => {
    const [episodeList, setEpisodeList] = useState(defaultValue);

    useEffect(() => {
        fetchEpisodes().then((data) => {
            setEpisodeList(data);
        });
    }, []);

    return { episodeList }
}