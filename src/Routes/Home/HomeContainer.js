import React from "react";
import HomePresenter from "./HomePresenter";

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

   render() {
      const {nowPlaying, upcoming, popular, error, loading } = this.state;
      // HomePresenter로 바로 가는 모든 스테이트 값을 렌더링.
      return <HomePresenter 
         nowPlaying={nowPlaying}
         upcoming={upcoming}
         popular={popular}
         error={error}
         loading={loading}
      />
   }
}
