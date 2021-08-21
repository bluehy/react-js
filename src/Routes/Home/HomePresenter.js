import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
`;


const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => loading ? (
   <Loader />
   ) : (
      <Container>
         {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing">{nowPlaying.map(movie=>movie.title)}</Section>}
         {upcoming && upcoming.length > 0 && <Section title="upcoming Movies">{upcoming.map(movie=>movie.title)}</Section>}
         {popular && popular.length > 0 && <Section title="popular Movies">{popular.map(movie=>movie.title)}</Section>}
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