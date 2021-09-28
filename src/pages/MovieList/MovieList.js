import axios from "axios";
import React, { useState, useEffect } from "react";
import CardList from "../../components/CardList";
import SearchBar from "../../components/SearchBar";

const apiKey = "d94423c2996901c0fdff420de40c7d79";
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=Star%20Wars&page=1
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function MovieList() {
    const [movies, setMovies] = useState(null);
    const [searchMovie, setSearchMovie] = useState("Star Wars");
    // useEffect - ComponentdidMount - Axios API Call
    // const moviesArray = [];
    useEffect(() => {
        axios
            .get(baseUrl, {
                params: {
                    api_key: apiKey,
                    query: searchMovie,
                    page: "1",
                },
            })
            .then(function (response) {
                console.log(response.data.results);
                // moviesArray.push(...response.data.results);
                setMovies(
                    response?.data?.results.filter((movie) => movie.poster_path)
                );
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [searchMovie]);
    return (
        <div >
            <SearchBar setSearchMovie={setSearchMovie} />
            <CardList movies={movies} baseImageUrl={baseImageUrl} />
        </div>
    );
}

export default MovieList;
