import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBarWrapper = styled.div`
    color: red;
    background-color: rgba(0, 0, 0, 0.7);
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 0 5rem;
    font-size: 3rem;
    /* svg {
        cursor: pointer;
    } */
`;

const StyledLink = styled(Link)`
    color: red;
    &:active {
        color: white;
    }
`;

const NavBar = () => {
    return (
        <NavBarWrapper>
            <StyledLink to="/">
                <FaHome />
            </StyledLink>
        </NavBarWrapper>
    );
};

export default NavBar;
