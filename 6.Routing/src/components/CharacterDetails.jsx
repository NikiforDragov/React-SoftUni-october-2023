import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const name = 'Unknown';

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((res) => res.json())
            .then(setCharacter);
    }, [id]);

    return (
        <>
            <h1>{character.name}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                cumque vel, consectetur ab quos natus aliquid quidem omnis
                voluptatem eum magnam quod expedita ipsum distinctio ipsa facere
                quaerat tempora nostrum fugiat debitis, deleniti repellendus
                culpa fugit. Quia exercitationem veniam temporibus non,
                voluptatibus, cumque voluptates, ex repellendus saepe
                necessitatibus vitae est!
            </p>
        </>
    );
};

export default CharacterDetails;
