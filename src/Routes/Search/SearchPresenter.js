import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

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