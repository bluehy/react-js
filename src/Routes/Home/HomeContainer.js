import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component{
   state = {
      nowPlaying: null,
      upcoming: null,
      popular: null,
      error: null,
      loading: true
   }
   //state 정의
   //아래로는 이후 로직 추가 (api 호출, error처리 등)

   async componentDidMount(){
      // async, await 작업 : 작업을 끝낼 때까지 js가 기다리게 하는 기능.
      // 예를 들어, api 데이터가 리턴되지 않은 상황에서도 js는 기다려주지 않기 때문에 asnyc, await 기능을 사용하여 리턴 될 때까지 js진행을 묶어두는 역할을 한다.
      try{
         const {data: {results : nowPlaying}} = await moviesApi.nowPlaying();
         // console.log(nowPlaying);
         // ---
         // this.setState({
         //    nowPlaying: nowPlaying
         // })
         // -> results : nowPlaying으로 변경
         const {data: {results : upcoming}} = await moviesApi.upcoming();
         // console.log(upcoming);
         const {data: {results : popular}} = await moviesApi.popular();
         // console.log(popular);
         // nowPlaying, upcoming, popular 의 data가 생김
         //state값을 새롭게 set해준다
         this.setState({
            nowPlaying,
            upcoming,
            popular
         })
      } catch {
         this.setState({
            error: "Can't find movies information"
            //console에만 출력되는 error메세지
         })
         // catch는 보통 error메시지를 설정해주는 단계
      } finally {
         this.setState({
            loading: false
         });
         // 앞에서 성공하든 실패하든 마지막에는 loading 상태를 false로 바꿀 것.
      }
   }


   render() {
      const {nowPlaying, upcoming, popular, error, loading } = this.state;
      // HomePresenter로 바로 가는 모든 스테이트 값을 렌더링.
      console.log(this.state);
      return <HomePresenter 
         nowPlaying={nowPlaying}
         upcoming={upcoming}
         popular={popular}
         error={error}
         loading={loading}
      />
   }
}
