import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./Components/News"; 


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<News />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
