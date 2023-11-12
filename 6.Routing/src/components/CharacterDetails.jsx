import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CharacterDetails = () => {
    const { id } = useParams();
    const location = useLocation()
    const navigate = useNavigate()
    const [character, setCharacter] = useState({});
    const name = 'Unknown';

    console.log(location.pathname);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((res) => {
                if(!res.ok) {
                    throw new Error('Not Found!')
                }

                return res.json()
            })
            .then(setCharacter)
            .catch((err) => {
                navigate('/404')
            })
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
