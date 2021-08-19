import React, {Component} from "react";
import Router from "Components/Router";
import Header from "Components/Header";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
    <>
      <Header />
      <Router />
      <GlobalStyles />
    </>
    );
  }

}

export default App;
