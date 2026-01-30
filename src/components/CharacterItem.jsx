import "./CharacterItem.css"

export const CharacterItem = ({ character }) => {
    const getStatusClass = (status) => {
        if (status === "Alive") {
            return "character-status-alive";
        } else if (status === "Dead") {
            return "character-status-dead";
        } else {
            return "character-status-unknown";
        }
    }

    return (
        <div className="character-item">
            <div className="character-item-image">
                <img src={character.image} alt={character.name}></img>
            </div>
            <div className="character-description">
                <div className="character-item-section">
                    <h3>{character.name}</h3>
                    <div className="character-status">
                        <span className={getStatusClass(character.status)}></span>
                        <span>{character.status} - {character.species}</span>
                    </div>
                </div>
                <div className="character-item-section">
                    <div>Gender: {character.gender}</div>
                    <div>Origin: {character.origin.name}</div>
                    <div>Location: {character.location.name}</div>
                </div>
            </div>
        </div>
    )
}