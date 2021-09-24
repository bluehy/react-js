import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";

const Container = styled.div`
   padding: 0px 20px;
`;


const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => loading ? (
   <Loader />
   ) : (
      <Container>
         {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing">{nowPlaying.map(movie=><span key={movie.id}>{movie.title}</span>)}</Section>}
         {upcoming && upcoming.length > 0 && <Section title="upcoming Movies">{upcoming.map(movie=><span key={movie.id}>{movie.title}</span>)}</Section>}
         {popular && popular.length > 0 && <Section title="popular Movies">{popular.map(movie=><span key={movie.id}>{movie.title}</span>)}</Section>}
         {error && <Error text={error} /> }
      </Container>
      );

HomePresenter.propTypes = {
   nowPlaying:propTypes.array,
   upcoming:propTypes.array,
   popular:propTypes.array,
   loading:propTypes.bool.isRequired,
   error:propTypes.string
};

export default HomePresenter;