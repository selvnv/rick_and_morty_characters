export const fetchEpisodes = async () => {
    let results = [];
    let fetchPageURL = "https://rickandmortyapi.com/api/episode";

    while (fetchPageURL) {
        const response = await fetch(fetchPageURL);
        const parsedResponse = await response.json();
        results = [...results, ...parsedResponse.results];
        fetchPageURL = parsedResponse.info.next;
        console.log(results);
    }

    return results;
}