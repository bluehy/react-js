import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
   padding: 30px 20px;
`;

const Form = styled.form`
   margin-bottom: 50px;
   width: 100%;
`;

const Input = styled.input`
   all: unset;
   font-size: 28px;
   width: 100%;
`;

const SearchPresenter = ({movieResults,
   showResults,
   searchTerm,
   loading,
   error,
   handleSubmit,
   updateTerm
   }) => <Container>
      <Helmet>
         <title>
            Search | πΏ
         </title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
         <Input 
            placeholder="Search Movies or TV Shows..." 
            value={searchTerm} 
            onChange={updateTerm}
         />
      </Form>
      {loading ? <Loader /> : <>
      {/* λ κ²°κ³Όκ°μ΄ μλμ§ νμΈνλ κ³Όμ μ μκ°ν  κ² */}
         {movieResults && movieResults.length > 0 && <Section title="Movie Results">{movieResults.map(movie => 
            <Poster 
               key={movie.id} 
               id={movie.id} 
               title={movie.original_title} 
               imageUrl={movie.poster_path}
               rating={movie.vote_average}
               year={movie.release_date && movie.release_date.substring(0,4)}
               isMovie={true}
            />
         )}</Section>}
         {showResults && showResults.length > 0 && <Section title="Show Results">{showResults.map(show => <Poster 
               key={show.id} 
               id={show.id} 
               title={show.original_name} 
               imageUrl={show.poster_path}
               rating={show.vote_average}
               year={show.first_air_date && show.first_air_date.substring(0,4)}
            />
         )}</Section>}
         {error && <Message color="#8e44ad" text={error} /> }
         {movieResults && showResults && movieResults.length === 0 && showResults.length === 0 && <Message text={`Nothing Found for ${searchTerm}`} color="#bdc3c7" />}
      </>}
   </Container>;

SearchPresenter.propTypes = {
   movieResults:PropTypes.array,
   showResults:PropTypes.array,
   handleSubmit:PropTypes.func.isRequired,
   loading:PropTypes.bool.isRequired,
   error:PropTypes.string,
   searchTerm:PropTypes.string,
   updateTerm:PropTypes.func.isRequired
}

export default SearchPresenter;