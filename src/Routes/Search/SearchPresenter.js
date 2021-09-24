import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div`
   padding: 0px 20px;
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
      <Form onSubmit={handleSubmit}>
         <Input 
            placeholder="Search Movies or TV Shows..." 
            value={searchTerm} 
            onChange={updateTerm}
         />
      </Form>
      {loading ? <Loader /> : <>
      {/* 늘 결과값이 있는지 확인하는 과정을 생각할 것 */}
         {movieResults && movieResults.length > 0 && <Section title="Movie Results">{movieResults.map(movie => <span key={movie.id}>{movie.title}</span>)}</Section>}
         {showResults && showResults.length > 0 && <Section title="Show Results">{showResults.map(show => <span key={show.id}>{show.name}</span>)}</Section>}
         {error && <Message color="#8e44ad" text={error} /> }
         {movieResults && showResults && movieResults.length === 0 && showResults.length === 0 && <Message text={`Nothing Found for ${searchTerm}`} color="#bdc3c7" />}
      </>}
   </Container>;

SearchPresenter.propTypes = {
   movieResults:propTypes.array,
   showResults:propTypes.array,
   handleSubmit:propTypes.func.isRequired,
   loading:propTypes.bool.isRequired,
   error:propTypes.string,
   searchTerm:propTypes.string,
   updateTerm:propTypes.func.isRequired
}

export default SearchPresenter;