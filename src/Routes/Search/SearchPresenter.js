import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
   padding: 0px 20px;
`;

const Form = styled.form``;

const Input = styled.input``;

const SearchPresenter = ({movieResults,
   showResults,
   searchTerm,
   loading,
   error,
   handleSubmit
   }) => <Container>
      <Form onSubmit={handleSubmit}>
         <Input placeholder="Search Movies or TV Shows..." value={searchTerm}/>
      </Form>
   </Container>;

SearchPresenter.propTypes = {
   movieResults:propTypes.array,
   showResults:propTypes.array,
   handleSubmit:propTypes.func.isRequired,
   loading:propTypes.bool.isRequired,
   error:propTypes.string,
   searchTerm:propTypes.string
}

export default SearchPresenter;