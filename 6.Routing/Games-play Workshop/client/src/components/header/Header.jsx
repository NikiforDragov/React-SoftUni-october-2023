import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>
                <Link to={'/'} className='home'>
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to='/games'>All games</Link>
                <div id='user'>
                    <Link to={'/'}>Create Game</Link>
                    <Link to={'/'}>Logout</Link>
                </div>
                <div id='guest'>
                    <Link to={'/'}>Login</Link>
                    <Link to={'/'}>Register</Link>
                </div>
            </nav>
        </header>
    );
}
