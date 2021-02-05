//import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Header from './components/header';
import Search from './components/search'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return(
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
