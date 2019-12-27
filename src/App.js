import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header.js";
import PostList from "./components/PostList.js";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
      </>
    );
  }
}

export default App;
