import { Collapse } from "./Collapse";
import { useEpisodeList } from "../hooks/useEpisodeList";
import { CharacterList } from "./CharacterList";

export const EpisodeList = () => {
    const { episodeList } = useEpisodeList([]);

    console.log(episodeList, typeof episodeList);

    return (
        <>
            {
                episodeList.map((episode) => {
                    return <Collapse
                        title={episode.episode + ": " + episode.name}
                        content={<CharacterList characterIds={episode.characters.map((url) => {
                            // Получить последний параметр endpoint - id персонажа
                            return url.split("/").pop();
                        })}></CharacterList>}
                    ></Collapse>
                })
            }
        </>
    )
}