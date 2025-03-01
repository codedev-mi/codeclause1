import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'https://omdbapi.com?apikey=fe2f6c44';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Sherlock Holmes');
    }, []);
    return (
        <div className="app">
            <h1>Mistry Movie Center</h1>

            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <img
                    src=
"https://www.bing.com/images/search?view=detailV2&ccid=T6THQ8Ta&id=684DCAE7DA8B4F4DB93DCA9728F30AC2BE0D0A62&thid=OIP.T6THQ8TajQ3yhzZCh66hyAHaLH&mediaurl=https%3a%2f%2fwww.themoviedb.org%2ft%2fp%2foriginal%2fmomkKuWburNTqKBF6ez7rvhYVhE.jpg&exph=3000&expw=2000&q=sherlock+holmes+movies&simid=607992105392829458&FORM=IRPRST&ck=98591816854219372AF5BA577DA06296&selectedIndex=0&itb=0"
                    alt="search icon"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (<div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>) : (
                        <div className="empty">
                            <h2>No Movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}
export default App;
