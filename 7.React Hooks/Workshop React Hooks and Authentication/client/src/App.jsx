import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from './components/header/Header';
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import GameDetails from './components/game-details/GameDetails';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async ({ email, password }) => {
        const result = await authService.login(email, password);

        setAuth(result);

        navigate(Path.Home);
    };

    const values = {
        loginSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.username,
    };

    return (
        <AuthContext.Provider value={values}>
            <div id='box'>
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />}></Route>
                    <Route path='/games' element={<GameList />}></Route>
                    <Route
                        path='/games/create'
                        element={<GameCreate />}
                    ></Route>
                    <Route
                        path='/games/:gameId/details'
                        element={<GameDetails />}
                    ></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
