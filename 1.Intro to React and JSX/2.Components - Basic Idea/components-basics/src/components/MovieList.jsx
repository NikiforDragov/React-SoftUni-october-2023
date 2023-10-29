export default function MovieList(props) {
    return(
        <div className="movie-list">
            <h2>{props.headingText}</h2>
            <ul>
                <li>First Movie</li>
                <li>Second Movie</li>
                <li>Third Movie</li>
            </ul>
        </div>
    );
}