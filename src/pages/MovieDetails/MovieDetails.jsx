import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
    MainWrapper,
    MovieImage,
    MovieImageWrapper,
    MovieRating,
    MovieTitle,
    TagLine,
    TextOverview,
} from "./MovieDetail.style";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const apiKey = "d94423c2996901c0fdff420de40c7d79";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const baseUrl = "https://api.themoviedb.org/3/movie/";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const [movie, setMovie] = useState("11");
    useEffect(() => {
        axios
            .get(baseUrl + id, {
                params: {
                    api_key: apiKey,
                    language: "en-US",
                },
            })
            .then(function (response) {
                // console.log(response.data);
                // moviesArray.push(...response.data.results);
                setMovie(response?.data);
            })
            .catch(function (error) {
                console.log(error);
                setMovie(null);
            })
            .then(function () {
                // always executed
            });
    }, []);
    console.log(movie);

    const MovieDisplay = () => (
        <>
            <NavBar />
            <MainWrapper>
                <MovieImageWrapper>
                    <MovieImage
                        src={baseImageUrl + movie?.poster_path}
                        alt="movie poster"
                    />

                    <MovieRating>
                        {movie?.vote_average}{" "}
                        <span>/ {movie?.vote_count} votes</span>
                    </MovieRating>
                    <TagLine>{movie?.tagline}</TagLine>
                </MovieImageWrapper>
                <MovieTitle>{movie?.title}</MovieTitle>
                <TextOverview>{movie?.overview}</TextOverview>
            </MainWrapper>
        </>
    );
    // In case movie page does not exist, it goes to homepage
    !movie && history.push("/");

    return movie && MovieDisplay();
};

export default MovieDetails;
