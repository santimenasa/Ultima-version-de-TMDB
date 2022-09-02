import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Login from "./components/Login";

import Movie from "./components/Movie";

let api = "4778d1c880ca743451dac8b656ea0c53";
let FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4778d1c880ca743451dac8b656ea0c53&page=1";

let SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=4778d1c880ca743451dac8b656ea0c53&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <header className="header">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleOnChange}
          ></input>
        </form>
      </header>
      <Login />
      <Formulario />
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
};

export default App;
