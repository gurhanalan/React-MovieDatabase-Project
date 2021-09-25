import React from "react";
import {
    StyledCardText,
    StyledCardWrapper,
    StyledCardImage,
} from "./Card.style";

export const Card = ({ movie, imgsrc }) => {
    // console.log("deneme", movie);
    return (
        <StyledCardWrapper>
            <StyledCardImage src={imgsrc} alt="image" />
            <StyledCardText>{movie.original_title}</StyledCardText>
        </StyledCardWrapper>
    );
};
