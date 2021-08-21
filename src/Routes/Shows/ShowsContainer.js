import { tvApi } from "api";
import React from "react";
import ShowsPresenter from "./ShowsPresenter";

export default class extends React.Component{
   state={
      topRated: null,
      popular: null,
      airingToday: null,
      error: null,
      loading: true
   }

   async componentDidMount(){
      try {
         const {data: {results: topRated}} = await tvApi.topRated();
         const {data: {results: popular}} = await tvApi.popular();
         const {data: {results: airingToday}} = await tvApi.airingToday();
         this.setState({
            topRated,
            popular,
            airingToday
         })
      }catch {
         this.setState({
            error: "Can't find TV information."
         })
      }finally{
         this.setState({ loading: false });
      }
   }

   render(){
      const { topRated, popular, airingToday, loading, error } = this.state;
      console.log(this.state);
      return <ShowsPresenter 
         topRated={topRated}
         popular={popular}
         airingToday={airingToday}
         loading={loading}
         error={error}
      />;
   }
}