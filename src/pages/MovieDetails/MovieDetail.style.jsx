import styled from "styled-components";

export const MainWrapper = styled.div`
    min-height: calc(100vh - 5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CardWrapper = styled.div``;

export const MovieImage = styled.img`
    width: 100%;
    max-width: 40rem;
    height: auto;
    object-fit: cover;
`;

export const TextOverview = styled.p`
    max-width: 80rem;
    font-size: 1.6rem;
    padding: 2rem;
    text-align: justify;
    line-height: 1.6;
`;
export const MovieTitle = styled.h2`
    max-width: 40rem;
    font-size: 3rem;
    letter-spacing: 2px;
`;

export const MovieImageWrapper = styled.div`
    position: relative;
`;

export const MovieRating = styled.p`
    color: red;
    background-color: rgba(0, 0, 0, 0.7);
    width: 20rem;
    padding: 0 1rem;
    font-weight: bolder;
    position: absolute;
    font-size: 2rem;
    right: 0rem;
    bottom: 2rem;
    span {
        font-size: 1.4rem;
    }
`;

export const TagLine = styled.p`
    color: red;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    top: 0;
    position: absolute;
    font-weight: bolder;
    padding: 0 1rem;
    font-size: 2rem;
`;
