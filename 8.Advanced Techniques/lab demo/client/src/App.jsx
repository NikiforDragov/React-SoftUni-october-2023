import { useEffect, useState } from 'react';
import CardContainer from './components/CardContainer';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContext } from './context/TodoContext';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setTodos(Object.values(result));
            });
    }, []);

    const onSubmitHandler = async (value) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            header: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ ...value, isFinish: 'false' }),
        });

        const data = await response.json();
        setTodos((state) => [...state, data]);
    };

    const context = {
      onSubmitHandler
    }

    return (
        <>
        <TodoContext.Provider value={context}>
            <Header />
            <CardContainer todos={todos}/>
        </TodoContext.Provider>
        </>
    );
}

export default App;
