import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
   state={
      movieResults: null,
      tvResults: null,
      searchTerm: "code",
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
      try {
         const movieResults = await moviesApi.search(searchTerm);
         const showResults = await tvApi.search(searchTerm);
         console.log(movieResults, showResults);
         this.setState({loading:true});
      }catch {
         this.setState({
            error: "Can't find results."
         });
      }finally {
         this.setState({ loading: false });
      }
   }

   render(){
      const {movieResults, tvResults, searchTerm, loading, error} = this.state;
      return <SearchPresenter 
         movieResults={movieResults}
         tvResults={tvResults}
         searchTerm={searchTerm}
         loading={loading}
         error={error}
      />
   }
}