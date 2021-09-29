import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import CardList from "../../components/CardList";
import SearchBar from "../../components/SearchBar";

const apiKey = "d94423c2996901c0fdff420de40c7d79";
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=Star%20Wars&page=1
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const MovieContext = createContext(null);

function MovieList() {
    const [movies, setMovies] = useState(null);
    const [searchMovie, setSearchMovie] = useState("Star Wars");

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
        <MovieContext.Provider value={{ setSearchMovie, movies, baseImageUrl }}>
            <SearchBar />
            <CardList />
        </MovieContext.Provider>
    );
}

export default MovieList;
