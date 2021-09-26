import React from "react";
import { Card } from "../Card";
import { StyledCardsWrapper } from "./CardList.style";

const CardList = ({ movies, baseImageUrl }) => {
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
