import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import GameDetails from './components/game-details/GameDetails';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
    return (
        <div id='box'>
            <Header />

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/games' element={<GameList />}></Route>
                <Route path='/games/create' element={<GameCreate />}></Route>
                <Route path='/games/:gameId/details' element={<GameDetails />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
            </Routes>
        </div>
    );
}

export default App;
