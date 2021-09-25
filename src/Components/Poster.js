import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``

const Rating = styled.div``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false }) => 
   <Container>
      <ImageContainer>
         <Image bgUrl={imageUrl}></Image>
         <Rating><span role="img" aria-label="rating">⭐</span>{" "}{rating}/10</Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
   </Container>

Poster.propTypes = {
   id: PropTypes.number.isRequired,
   imageUrl: PropTypes.string,
   title: PropTypes.string.isRequired,
   rating: PropTypes.number,
   year: PropTypes.string,
   isMovie: PropTypes.bool.isRequired
}