import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Blogg from "./Views/Blogg";



const App = () => {
  return (
    <>
    <Navbar />
    

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/profile" element={ <Profile /> }/>
        <Route path="/blogg" element={ <Blogg /> } />
      </Routes>
    
    </>
  )
}

export default App