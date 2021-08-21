import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({movieResults,
   showResults,
   searchTerm,
   loading,
   error,
   handleSubmit}) => null;

SearchPresenter.propTypes = {
   movieResults:propTypes.array,
   showResults:propTypes.array,
   handleSubmit:propTypes.func.isRequired,
   loading:propTypes.bool.isRequired,
   error:propTypes.string,
   searchTerm:propTypes.string
}

export default SearchPresenter;