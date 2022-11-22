import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Views/Home";
import Blogg from "./Views/Blogg";
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Images from "./Views/Images";

const App = () => {
  
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()
 
  useEffect(() => {

    const getToken = async () => {
      if(isAuthenticated) {
        //Logged in - Get accesstoken and save in localstorage.
        try {

          const token = await getAccessTokenSilently({
            audience: process.env.REACT_APP_AUTH0_AUDIENCE
          })

          localStorage.setItem('accessToken', token)
        } catch (err){
          console.log(err.message)
  
        }
      } else {
        // we are not logged in - remove accesstoken from localstorage.
        localStorage.removeItem('accessToken')
      }
    }

    getToken()

  }, [getAccessTokenSilently, isAuthenticated])

  return (
    <>
    
    <Navbar />
    

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/blogg" element={ <Blogg /> } />
        <Route path="/Images" element={ <Images />} />
      </Routes>
    
    </>
  )
}

export default App