import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";

const Container = styled.div`
   padding: 0px 20px;
`;

const ShowsPresenter = ({topRated, popular, airingToday, error, loading}) => 
   loading ? (
      <Loader/>
      ) : (
      <Container>
         {topRated && topRated.length > 0 && <Section title="Top Rated Shows">{topRated.map(show=><span key={show.id}>{show.name}</span>)}</Section>}
         {popular && popular.length > 0 && <Section title="Popular Shows">{popular.map(show=><span key={show.id}>{show.name}</span>)}</Section>}
         {airingToday && airingToday.length > 0 && <Section title="Airing Today Shows">{airingToday.map(show=><span key={show.id}>{show.name}</span>)}</Section>}
         {error && <Error text={error} />}
      </Container>);

ShowsPresenter.propTypes = {
   topRated:propTypes.array,
   popular:propTypes.array,
   airingToday:propTypes.array,
   loading:propTypes.bool.isRequired,
   error:propTypes.string
}

export default ShowsPresenter;