import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Views/Home";
import Blogg from "./Views/Blogg";




const App = () => {
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