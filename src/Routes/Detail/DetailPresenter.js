import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Loader from "Components/Loader";

const Container = styled.div`
   height: calc(100vh - 50px);
   /* - 띄어쓰기 놓치지말것 */
   width: 100%;
   position: relative;
   padding: 50px;
`;

const Backdrop = styled.div`
   position:absolute;
   top:0;
   left:0;
   width: 100%;
   height: 100%;
   background-image: url(${props => props.bgImage});
   background-position: center center;
   background-size: cover;
   filter : blur(3px);
   opacity: 0.5;
   /* z-index: 0; */
`;

const Content = styled.div`
   display:flex;
   width: 100%;
   height: 100%;
   position:relative;
   z-index:1;
`;

const Cover = styled.div`
   width: 30%;
   height: 100%;
   border-radius: 5px;
   background-image: url(${props => props.bgImage});
   background-position: center center;
   background-size: cover;
`;

const Data = styled.div`
   width: 70%;
   margin-left: 10px;
`;

const Title = styled.h3`
   font-size: 32px;
   margin-bottom: 10px;
`;

const DescContainer = styled.div`
   margin:20px 0;
`;

const Desc = styled.span`
`;

const Divider = styled.span`
   margin: 0 10px;
`;

const Overview = styled.p`
   width: 50%;
   font-size: 12px;
   opacity: 0.7;
   line-height: 1.5;
`;

const DetailPresenter = ({result, error, loading}) => (
   loading ? (
      // detail 화면 로딩 중 helmet
   <>
   <Helmet>
      <title>Loading | 🍿</title>
   </Helmet>
   <Loader />
   </>
   ) : 
   <Container>
      {/* detail 화면 진입 후 helmet */}
      <Helmet>
      <title>{result.original_title ? result.original_title : result.original_name} | 🍿</title>
      </Helmet>
      <Backdrop bgImage={`http://image.tmdb.org//t/p/original${result.backdrop_path}`}/>
      <Content>
         <Cover bgImage={result.poster_path ? `http://image.tmdb.org//t/p/original${result.poster_path}` : require("../../Assets/noPosterIcon.png")}/>
         <Data>
            <Title>{result.original_title ? result.original_title : result.original_name}</Title>
            <DescContainer>
               <Desc>
                  {result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}
               </Desc>
               <Divider>·</Divider>
               <Desc>
                  {result.runtime ? result.runtime : result.episode_run_time[0]} min
               </Desc>
               <Divider>·</Divider>
               <Desc>
                  {result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 
                     ? genre.name 
                     : `${genre.name} / ` )}
               </Desc>
                  {/* genre의 갯수만큼 출력이 끝나면 / 를 생략하기 위해서 */}
            </DescContainer>
            <Overview>
               {result.overview}
            </Overview>
         </Data>
      </Content>
   </Container>
);

DetailPresenter.propTypes = {
   result:PropTypes.object,
   loading:PropTypes.bool.isRequired,
   error:PropTypes.string
}

export default DetailPresenter;