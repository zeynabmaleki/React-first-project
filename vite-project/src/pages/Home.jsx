import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css'


function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    // This state variable is used to store the user's search input.
    // The useState hook initializes it to an empty string.
    // When the user types in the search input, this state will be updated.
    // The setSearchQuery function is used to update the state.

    const movies = [
        { id: '1', Title: "Movie 1", year: 2021 },
        { id: '2', Title: "Movie 2", year: 2022 },
        { id: '3', Title: "Movie 3", year: 2023 },
        { id: '4', Title: "Movie 4", year: 2024 },
        { id: '5', Title: "Movie 5", year: 2025 },
    ]

    const HandleSearch = (e) => { 
        e.preventDefault(); 
        // Prevent the default form submission behavior
        // This function is called when the form is submitted.
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
        <div className="home">
            <form onSubmit={HandleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />

                <button type="submit" className="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.Title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                    <MovieCard movie={movie} key={movie.id} />
                )))}
                {/* 
                    //This is a map function that iterates over the movies array
                    //and renders a MovieCard component for each movie.
                    //Each MovieCard component is passed a movie object as a prop and a unique key.
                */}

            </div>
        </div>
    );
}

export default Home;
// This component is responsible for displaying the home page with a grid of movie cards.