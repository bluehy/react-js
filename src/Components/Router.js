import React from "react";
import {HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Shows from "Routes/Shows";
import Search from "Routes/Search";
// import Detail from "Routes/Detail";

export default () => (
   <Router>
      <Switch>
         <Route path ="/" exact component={Home} />
         {/* 어떤 URL에서 해당 Route를 render할 지 지정. */}
         {/* route는 router 안에서만 지정가능하다. */}
         <Route path ="/shows" exact component={Shows} />
            <Route path="/shows/popular" render={() => <h1>popular</h1>} />
         <Route path ="/search" component={Search} />
         {/* <Route path ="/" exact component={Detail} /> */}
         <Redirect from="*" to="/" />
      </Switch>
   </Router>
)