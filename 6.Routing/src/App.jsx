import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import CharacterList from './components/CharacterList';

function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contacts' element={<Contacts />}></Route>
                <Route path='/characters' element={<CharacterList />}></Route>
            </Routes>

            <footer>All rights reserved</footer>
        </>
    );
}

export default App;
