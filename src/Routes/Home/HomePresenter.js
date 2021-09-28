import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet"; 

import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
   padding: 30px 20px;
`;


const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => (
<>
{/* fragment */}
<Helmet>
   <title>Movies | 🍿</title>
</Helmet>
{/* loading을 기다리지 않고 title을 출력하기 위해서 */}
{loading ? (
   <Loader />
   ) : (
      <Container>
         {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing">{nowPlaying.map(movie=>
            <Poster 
               key={movie.id} 
               id={movie.id} 
               title={movie.original_title} 
               imageUrl={movie.poster_path}
               rating={movie.vote_average}
               isMovie={true}
               year={movie.release_date && movie.release_date.substring(0,4)}
               // year={movie.release_date ? movie.release_date.substring(0,4) : "no data"}
               // some.substring(start,end) : 시작지점과 끝지점을 지정해 해당 문자열을 추출
            />
         )}</Section>}
         {upcoming && upcoming.length > 0 && <Section title="upcoming Movies">{upcoming.map(movie=>
            <Poster 
               key={movie.id} 
               id={movie.id} 
               title={movie.original_title} 
               imageUrl={movie.poster_path}
               rating={movie.vote_average}
               isMovie={true}
               year={movie.release_date && movie.release_date.substring(0,4)}
            />
         )}</Section>}
         {popular && popular.length > 0 && <Section title="popular Movies">{popular.map(movie=>
            <Poster 
               key={movie.id} 
               id={movie.id} 
               title={movie.original_title} 
               imageUrl={movie.poster_path}
               rating={movie.vote_average}
               isMovie={true}
               year={movie.release_date && movie.release_date.substring(0,4)}
            />
         )}</Section>}
         {error && <Message color="#8e44ad" text={error} /> }
      </Container>)}
      </>
      );

HomePresenter.propTypes = {
   nowPlaying:PropTypes.array,
   upcoming:PropTypes.array,
   popular:PropTypes.array,
   loading:PropTypes.bool.isRequired,
   error:PropTypes.string
};

export default HomePresenter;