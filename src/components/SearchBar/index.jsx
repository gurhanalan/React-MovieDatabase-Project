import React, { useRef, useContext } from "react";
import {
    StyledSearchBarInput,
    StyledSearchBarButton,
    StyledSearchBarWrapper,
} from "./SearchBar.style";
import { MovieContext } from "../../pages/MovieList/MovieList";

const SearchBar = () => {
    const { setSearchMovie } = useContext(MovieContext);
    const input = useRef(null);

    const search = () => {
        setSearchMovie(input?.current?.value);
        input.current.value = "";
    };
    return (
        <StyledSearchBarWrapper>
            <StyledSearchBarInput
                ref={input}
                onKeyDown={(e) => e.key === "Enter" && search()}
            />
            <StyledSearchBarButton onClick={search}>
                Search
            </StyledSearchBarButton>
        </StyledSearchBarWrapper>
    );
};

export default SearchBar;
