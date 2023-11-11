import { useEffect, useState } from 'react';

const BASE_URL = 'https://swapi.dev/api';
const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/people`)
            .then((res) => res.json())
            .then((data) => setCharacters(data.results));
    });

    return (
        <ul>
            {characters.map((character) => (
                <li key={character.name}>{character.name}</li>
            ))}
        </ul>
    );
};

export default CharacterList;
