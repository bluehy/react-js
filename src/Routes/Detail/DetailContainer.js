import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

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
         //pathname에 movie경로가 있는지 확인
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
            ({data: result} = await moviesApi.detail(parsedId) )
            // const {data: result} = ...
            // result가 앞에서 먼저 선언되었기 때문에 const대신 () 를 사용. result는 가변변수기 때문에.
            //data가 result고, data 안에 result가 있는 게 아니기 때문에 {result}가 아니다.
            // const request = await moviesApi.detail(parsedId);
            // result = request.data;
         }else{
            ({data: result} = await tvApi.detail(parsedId) )
            // const request = await tvApi.detail(parsedId);
            // result = request.data;
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