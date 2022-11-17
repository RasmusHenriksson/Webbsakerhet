import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Views/Home";
import Blogg from "./Views/Blogg";
import { useEffect } from "react";




const App = () => {

  useEffect(() => {
    fetch('https://localhost:7269/api/First/test1').then(res => {
  console.log(res)
  return res.json()
})
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
  }, [])

  return (
    <>
    
    <Navbar />
    

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/blogg" element={ <Blogg /> } />
      </Routes>
    
    </>
  )
}

export default App