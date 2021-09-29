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
    return (
        <StyledSearchBarWrapper>
            <StyledSearchBarInput
                ref={input}
                onKeyDown={(e) =>
                    e.key === "Enter" && setSearchMovie(input?.current?.value)
                }
            />
            <StyledSearchBarButton
                onClick={() => setSearchMovie(input?.current?.value)}
            >
                Search
            </StyledSearchBarButton>
        </StyledSearchBarWrapper>
    );
};

export default SearchBar;
