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

   render(){
      const { topRated, popular, airingToday, loading, error } = this.state;
      return <ShowsPresenter 
         topRated={topRated}
         popular={popular}
         airingToday={airingToday}
         loading={loading}
         error={error}
      />;
   }
}