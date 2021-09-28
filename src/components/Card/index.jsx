import React from "react";
import { useHistory } from "react-router-dom";
import {
    StyledCardText,
    StyledCardWrapper,
    StyledCardImage,
} from "./Card.style";

export const Card = ({ movie, imgsrc }) => {
    // console.log("deneme", movie);
    const history = useHistory();
    return (
        <StyledCardWrapper onClick={() => history.push("/" + movie.id)}>
            <StyledCardImage src={imgsrc} alt="image" />
            <StyledCardText>{movie.original_title}</StyledCardText>
        </StyledCardWrapper>
    );
};
