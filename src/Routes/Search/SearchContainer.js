import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
   state={
      movieResults: null,
      showResults: null,
      searchTerm: "",
      loading: true,
      error:null
   }
   
   componentDidMount(){
      this.handleSubmit();
   }


   handleSubmit = () => {
      const { searchTerm } = this.state;
      if(searchTerm !== ""){
         this.searchByTerm();
      }
   }

   searchByTerm = async(term) => {
      const { searchTerm } = this.state;
      this.setState({loading:true});
      try {
         const {data: {results: movieResults}} = await moviesApi.search(searchTerm);
         const {data: {results: showResults}} = await tvApi.search(searchTerm);
         // console.log(movieResults, showResults);
         this.setState({
            movieResults,
            showResults
         });
      }catch {
         this.setState({
            error: "Can't find results."
         });
      }finally {
         this.setState({ loading: false });
      }
   }

   render(){
      const {movieResults, showResults, searchTerm, loading, error} = this.state;
      // console.log(this.state);
      return <SearchPresenter 
         movieResults={movieResults}
         showResults={showResults}
         searchTerm={searchTerm}
         loading={loading}
         error={error}
         handleSubmit={this.handleSubmit}
      />
   }
}