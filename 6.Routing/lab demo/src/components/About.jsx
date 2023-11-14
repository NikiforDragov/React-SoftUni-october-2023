import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Mission from './Mission';
import Values from './Values';

const About = () => {
    return (
        <>
            <h2>About Page</h2>
            <nav>
                <Link to='us'>About Us</Link>
                <Link to='mission'>Our Mission</Link>
                <Link to='values'>Our Values</Link>
            </nav>

            <Routes>
                <Route path='/us' element={<AboutUs />}></Route>
                <Route path='/mission' element={<Mission />}></Route>
                <Route path='/values' element={<Values />}></Route>
            </Routes>
        </>
    );
};

export default About;
