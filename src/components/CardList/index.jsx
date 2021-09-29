import React, { useContext } from "react";
import { Card } from "../Card";
import { StyledCardsWrapper } from "./CardList.style";
import { MovieContext } from "../../pages/MovieList/MovieList";

const CardList = () => {
    const { movies, baseImageUrl } = useContext(MovieContext);
    return (
        <StyledCardsWrapper>
            {movies?.map((movie, index) => (
                <Card
                    key={index}
                    movie={movie}
                    imgsrc={baseImageUrl + movie.poster_path}
                />
            ))}
        </StyledCardsWrapper>
    );
};

export default CardList;
