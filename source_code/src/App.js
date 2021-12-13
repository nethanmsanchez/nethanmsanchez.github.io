// homePage.js
// Nethanmsanchez@github.io
// Nethan S



import './App.css';
import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/homePage';
import Bio from './components/bio';
import MyNavBar from './components/myNavBar';


class App extends React.Component {
  render(){
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bio" element={<Bio />} /> 
          </Routes>
        </BrowserRouter>
      );
  }
}

export default App;
