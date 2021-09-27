import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { moviesApi } from "api";

const Container = styled.div`
   font-size: 12px;
`;


const Image = styled.div`
   height: 180px;
   border-radius: 5px;
   margin-bottom: 5px;
   background-image: url(${props => `http://image.tmdb.org//t/p/w300${props.bgUrl}`});
   background-size:cover;
   background-position:center center;
   transition:opacity 0.2s ease-in-out;
`;

const Rating = styled.div``;

const ImageContainer = styled.div`
   margin-bottom: 5px;
   &:hover{
      ${Image}{
         opacity:0.3;
      }
   }
`;

const Title = styled.span`
   display:block;
   margin-bottom: 5px;
`;

const Year = styled.span`
   font-size: 10px;
   color: rgba(255,255,255,0.7);
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false }) => (
   <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Container>
         <ImageContainer>
            <Image bgUrl={imageUrl}></Image>
            <Rating><span role="img" aria-label="rating">⭐</span>{" "}{rating}/10</Rating>
         </ImageContainer>
         <Title>{title}</Title>
         <Year>{year}</Year>
      </Container>
   </Link>
);
   

Poster.propTypes = {
   id: PropTypes.number.isRequired,
   imageUrl: PropTypes.string,
   title: PropTypes.string.isRequired,
   rating: PropTypes.number,
   year: PropTypes.string,
   isMovie: PropTypes.bool.isRequired
}

export default Poster;