import { useEffect, useState } from 'react';
import CardContainer from './components/CardContainer';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = 'http://localhost:3030/jsonstore/';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}todos`)
            .then((response) => {
                response.json();
            })
            .then((result) => {
                setTodos(Object.values(result));
            });
    });

    return (
        <>
            <Header />
            <CardContainer todos={todos} />
        </>
    );
}

export default App;
