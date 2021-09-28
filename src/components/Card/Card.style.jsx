import styled from "styled-components";

export const StyledCardWrapper = styled.div`
    width: 30rem;
    height: 40rem;
    /* border: solid 1px black; */
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    padding: 0.5rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;

export const StyledCardText = styled.p`
    color: red;
    font-size: 1.8rem;
    text-align: center;
`;

export const StyledCardImage = styled.img`
    height: 85%;
    width: auto;
    object-fit: cover;
`;
