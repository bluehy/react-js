import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const ShowsPresenter = ({topRated, popular, airingToday, error, loading}) => null;

ShowsPresenter.propTypes = {
   topRated:propTypes.array,
   popular:propTypes.array,
   airingToday:propTypes.array,
   loading:propTypes.bool.isRequired,
   error:propTypes.string
}

export default ShowsPresenter;