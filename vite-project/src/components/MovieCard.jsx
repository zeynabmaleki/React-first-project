import '../css/MovieCard.css'

function MovieCard({ movie }) {

    function handleFavoriteClick() {
        alert(`Added ${movie.Title} to favorites!`);
        // Here you would typically update the state or context to reflect the favorite status
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.Title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={handleFavoriteClick}>
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
}

export default MovieCard;
// This component is responsible for displaying individual movie cards.