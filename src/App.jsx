import React,{ useState } from 'react';
import Header from "./components/Header"
import Home from "./components/screens/Home"
import About from "./components/screens/About";
import {BrowserRouter as Router ,Route,Routes,Link} from 'react-router-dom';
import Mentors from "./components/screens/Mentors";

function App(){

  return (
    <>
  <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Mentors" element={<Mentors/>}/>

       
      </Routes>
    </Router>
     
    </>
  )
}

export default App
