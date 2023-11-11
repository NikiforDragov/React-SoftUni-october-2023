import { useEffect, useState } from 'react';
import CharacterListItem from './CharacterListItem';

const BASE_URL = 'https://swapi.dev/api';
const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/people`)
            .then((res) => res.json())
            .then((data) => setCharacters(data.results));
    });

    return (
        <>
            {characters.map((character) => (
                <CharacterListItem key={character.name} {...character} />
            ))}
        </>
    );
};

export default CharacterList;
