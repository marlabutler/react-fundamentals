import React from 'react';
import styled from 'styled-components';

const Movie = styled.div`
    margin: 5px;
    width: 300px;
    height: 500px;
    border-radius: 5px;
    text-align: center;
    background: #48b1bf;
`;
const Poster = styled.img`
    width: calc(100% - 20px);
    height: calc(70% - 10px);
    margin: 10px 10px 0 10px;
    border-radius: 5px;
`;
const Title = styled.h5`
    margin: 5px 0 0 0;
    color: white;
`;
const Description = styled.p`
    height: 20%;
    color: white;
    overflow-wrap: break-word;
    overflow: scroll;
`;


const MovieAppDisplay = ({movie}) => {
    return(
        <Movie>
            <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <Title>{movie.original_title}</Title>
            <Description>{movie.overview}</Description>
        </Movie>
    )
}

export default MovieAppDisplay;