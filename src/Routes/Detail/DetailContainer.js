import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
   constructor(props){
      // 생성자
      super(props);

      const{
         location: {pathname}
      } = props;

      this.state={
      result: null,
         error: null,
         loading: true,
         isMovie: pathname.includes("/movie/")
      }
   }

   
   async componentDidMount(){
      const {match: 
         {params: {id}
         },
         history: {push}         
      } = this.props;

      const { isMovie } = this.state;
      
      const parsedId = parseInt(id);
      if(isNaN(parsedId)){
         return push("/");
         //back to Home + 함수 종료
      }
      let result;
      try{
         if(isMovie){
            const request = await moviesApi.detail(parsedId);
            result = request.data;
         }else{
            const request = await tvApi.detail(parsedId);
            result = request.data;
         }
         console.log(result);
      }catch{
         this.setState({
            error: "Can't find anything."
         })
      }finally{
         this.setState({loading: false, result})
      }
   }

   render(){
      const {result, error, loading} = this.state;
      console.log(this.state);
      return <DetailPresenter 
         result={result}
         error={error}
         loading={loading}
      />
   }
}