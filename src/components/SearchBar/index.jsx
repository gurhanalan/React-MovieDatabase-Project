import React, { useState } from "react";
import {
    StyledSearchBarInput,
    StyledSearchBarButton,
    StyledSearchBarWrapper,
} from "./SearchBar.style";
const SearchBar = ({ setSearchMovie }) => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <StyledSearchBarWrapper>
            <StyledSearchBarInput
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) =>
                    e.key === "Enter" && setSearchMovie(searchInput)
                }
            />
            <StyledSearchBarButton onClick={() => setSearchMovie(searchInput)}>
                Search
            </StyledSearchBarButton>
        </StyledSearchBarWrapper>
    );
};

export default SearchBar;
