import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Header from './components/header/Header';
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import GameEdit from './components/game-edit/GameEdit';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';
// import GameDetails from './components/game-details/GameDetails';
const GameDetails = lazy(() => import('./components/game-details/GameDetails'));

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <div id='box'>
                    <Header />
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Routes>
                            <Route path={Path.Home} element={<Home />}></Route>
                            <Route path='/games' element={<GameList />}></Route>
                            <Route
                                path='/games/:gameId/details'
                                element={<GameDetails />}
                            ></Route>

                            <Route path='/login' element={<Login />}></Route>
                            <Route
                                path='/register'
                                element={<Register />}
                            ></Route>
                            <Route element={<AuthGuard />}>
                                <Route
                                    path='/games/create'
                                    element={<GameCreate />}
                                />
                            </Route>
                            <Route
                                path={Path.GameEdit}
                                element={<GameEdit />}
                            ></Route>
                            <Route
                                path={Path.Logout}
                                element={<Logout />}
                            ></Route>
                        </Routes>
                    </Suspense>
                </div>
            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;
