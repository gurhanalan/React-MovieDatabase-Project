import React, { useRef } from "react";
import {
    StyledSearchBarInput,
    StyledSearchBarButton,
    StyledSearchBarWrapper,
} from "./SearchBar.style";
const SearchBar = ({ setSearchMovie }) => {
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
