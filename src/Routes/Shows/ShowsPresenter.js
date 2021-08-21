import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Section from "Components/Section";

const Container = styled.div`

`;

const ShowsPresenter = ({topRated, popular, airingToday, error, loading}) => 
   loading ? null : <Container>
      {topRated && topRated.length > 0 && <Section title="Top Rated Shows">{topRated.map(show=>show.name)}</Section>}
      {popular && popular.length > 0 && <Section title="Popular Shows">{popular.map(show=>show.name)}</Section>}
      {airingToday && airingToday.length > 0 && <Section title="Airing Today Shows">{airingToday.map(show=>show.name)}</Section>}
   </Container>;

ShowsPresenter.propTypes = {
   topRated:propTypes.array,
   popular:propTypes.array,
   airingToday:propTypes.array,
   loading:propTypes.bool.isRequired,
   error:propTypes.string
}

export default ShowsPresenter;