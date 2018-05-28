import React, { Component } from 'react';
import HeaderApp from "./components/header/headerApp";
import ContainerApp from "./components/container/containerApp";
import FooterApp from "./components/footer/footerApp";

class App extends Component {
  render() {
    return (
      <div className="app">
          <HeaderApp/>
          <ContainerApp/>
          <FooterApp/>
      </div>
    );
  }
}

export default App;
