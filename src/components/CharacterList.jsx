import { useEffect, useState } from "react"
import { CharacterItem } from "./CharacterItem";

export const CharacterList = ({ characterIds }) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/" + idListToString(characterIds))
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data);
                setTimeout(() => setIsLoading(false), 200);
            })
            .catch((error) => {
                console.error("Error fetching characters:", error);
                setTimeout(() => setIsLoading(false), 200);
            });
    }, [characterIds]);

    function idListToString(characterIds) {
        return characterIds.join(",");
    }

    console.log(characterIds);

    if (isLoading) {
        return <div style={{margin: "20px"}}>Loading...</div>
    }

    if (characters.length === 0) {
        return <div>Failed to load data...</div>
    }

    return (
        <>
            {
                characters.map((character) => {
                    return <CharacterItem character={character}></CharacterItem>
                })
            }
        </>
    )
}